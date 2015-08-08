module Spree
class Import < Spree::Base
  def self.var_import(file,product)
  CSV.foreach(file.path,headers: true) do |row|
    variant_params =row.to_hash
    puts row.to_hash
    option_types= variant_params['option_Type']
    option_types= option_types.split(',')
    option_types_representation=variant_params['option_type_display'].split(',')
    option_values_name=variant_params['option_Type_values'].split(',')
    option_values_display=variant_params['option_Type_values_display'].split(',')
    option_types.each_with_index do  |name, index|
      opt=Spree::OptionType.where({:name=> name,:presentation=>option_types_representation[index]}).first_or_create
      #opt=Spree::OptionType.where({"lower(name) = ? and lower(presentation) = ?", name.downcase,option_types_representation[index].downcase}).first_or_create
      opv=opt.option_values.where({:name => option_values_name[index] , :presentation=> option_values_display[index]}).first_or_create
      unless product.option_types.include?(opt)
          product.option_types << opt
          product.save
        end
      end #end of option type assign loop
      varnts= Spree::Variant.where(:product_id=> product.id,:sku=>variant_params['variant_sku'],:cost_price=>variant_params['variant_price'],:vendor_sku=>variant_params['variant_vendor_sku'],:width=>variant_params['variant_width'],:height=>variant_params['variant_height'],:depth=>variant_params['variant_depth'])
        if varnts.length == 0
        
          Spree::Variant.create(:product_id=> product.id,:sku=>variant_params['variant_sku'],:cost_price=>variant_params['variant_price'],:vendor_sku=>variant_params['variant_vendor_sku'],:width=>variant_params['variant_width'],:height=>variant_params['variant_height'],:depth=>variant_params['variant_depth'])
         
         end
        #product.variants.where(:sku=>variant_params['variant_sku'],:cost_price=>variant_params['variant_price'],:vendor_sku=>variant_params['variant_vendor_sku'],:width=>variant_params['variant_width'],:height=>variant_params['variant_height'],:depth=>variant_params['variant_depth']).first_or_create
  end
end
	def self.prodcut_import(file)
  		CSV.foreach(file.path, headers: true) do |row|
  			product_params=row.to_hash
  			taxnomy_name=product_params['category_name']
  			product_params.delete("category_name")
  			taxnomy=Spree::Taxonomy.find_or_create_by(:name=>taxnomy_name)
  			shiping_cat_name=product_params['shipping_category_name']
  			product_params.delete("shipping_category_name")
  			taxn_name=product_params['sub_cat_name']
  			shiping_cat=Spree::ShippingCategory.find_or_create_by(:name=>shiping_cat_name)
  			product_params.delete("sub_cat_name")
  			taxn=Spree::Taxon.find_or_create_by(:name=>taxn_name,:taxonomy_id=>taxnomy.id,:parent_id=>taxnomy.taxons.first.id)
  			if product_params['images_url'].present?
  			file_path=product_params['images_url']
  			product_params.delete("images_url")
  			file_path=open(file_path)
  			imgs=Spree::Image.create!(:attachment=>file_path)
  			end
  			pr=Spree::Product.new(product_params)
  			if imgs.present?
    			pr.images << imgs
    		end
    		pr.taxons << taxn
    		pr.shipping_category_id=shiping_cat.id
    		pr.save!
    	
  		end
	end
	def self.catageries_import(file)
		CSV.foreach(file.path,headers: true) do |row|
			cat_params =row.to_hash
			taxnomy_name=cat_params['category_name']
			taxnomy=Spree::Taxonomy.find_or_create_by(:name=>taxnomy_name)
			taxn_name=cat_params['sub_cat_name']
			# taxn_icon=cat_params['sub_cat_image']
			# taxn_icon_path= URI.parse(cat_params['sub_cat_image'])
			# txn=Spree::Taxon.where(:name=>taxn_name,:taxonomy_id=>taxnomy.id,:parent_id=>taxnomy.taxons.first.id)
			Spree::Taxon.find_or_create_by(:name=>taxn_name,:taxonomy_id=>taxnomy.id,:parent_id=>taxnomy.taxons.first.id)
			# t.icon=URI.parse(cat_params['sub_cat_image'])
		end
	end
end
end
