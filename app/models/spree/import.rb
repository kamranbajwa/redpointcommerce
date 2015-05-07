module Spree
class Import < Spree::Base
	def self.prodcut_import(file)
  		CSV.foreach(file.path, headers: true) do |row|
  			product_params=row.to_hash
  			debugger
  			file_path=product_params['images_url']
  			product_params.delete("images_url")
  			file_path=File.open(file_path)
  			imgs=Spree::Image.create!(:attachment=>file_path)
    		pr=Spree::Product.new(product_params)
    		pr.images << imgs
    		pr.save!
    	
  		end
	end
end
end