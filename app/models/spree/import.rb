module Spree
class Import < Spree::Base
	def self.prodcut_import(file)
  		CSV.foreach(file.path, headers: true) do |row|
  			debugger
  			product_params=row.to_hash
  			if product_params['images_url']!=nil or product_params['images_url']!=""
  			file_path=product_params['images_url']
  			product_params.delete("images_url")
  			file_path=File.open(file_path)
  			imgs=Spree::Image.create!(:attachment=>file_path)
  			end
  			pr=Spree::Product.new(product_params)
  			if imgs
    			pr.images << imgs
    		end
    		pr.save!
    	
  		end
	end
end
end