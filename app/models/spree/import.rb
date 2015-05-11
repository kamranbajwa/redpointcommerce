module Spree
class Import < Spree::Base
	def self.prodcut_import(file)
  		CSV.foreach(file.path, headers: true) do |row|
  			product_params=row.to_hash
  			taxnomy_name=product_params['category_name']
  			product_params.delete("category_name")
  			taxnomy=Spree::Taxonomy.where(:name=>taxnomy_name).first_or_create
  			shiping_cat_name=product_params['shipping_category_name']
  			product_params.delete("shipping_category_name")
  			taxn_name=product_params['sub_cat_name']
  			shiping_cat=Spree::ShippingCategory.where(:name=>shiping_cat_name).first_or_create
  			product_params.delete("sub_cat_name")
  			taxn=Spree::Taxon.where(:name=>taxn_name,:taxonomy_id=>taxnomy.id,:parent_id=>taxnomy.taxons.first.id).first_or_create
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
    		debugger
    		pr.taxons << taxn
    		pr.shipping_category_id=shiping_cat.id
    		pr.save!
    	
  		end
	end
	def self.catageries_import(file)
		CSV.foreach(file.path,headers: true) do |row|
			cat_params =row.to_hash
			taxnomy_name=cat_params['category_name']
			taxnomy=Spree::Taxonomy.where(:name=>taxnomy_name).first_or_create
			taxn_name=cat_params['sub_cat_name']
			# txn=Spree::Taxon.where(:name=>taxn_name,:taxonomy_id=>taxnomy.id,:parent_id=>taxnomy.taxons.first.id)
			Spree::Taxon.create(:name=>taxn_name,:taxonomy_id=>taxnomy.id,:parent_id=>taxnomy.taxons.first.id)
		end
	end
end
end