class Spree::Admin::ImportsController < Spree::Admin::ResourceController
	def p_import
		 begin
    		Spree::Import.prodcut_import(params[:file])
    		redirect_to :back, notice: "Products imported scuccessfuly."
    	 rescue
    	 	redirect_to :back, notice: "Invalid data in csv."
    	 end
  end
  def cat_import
	  	begin
	  		Spree::Import.catageries_import(params[:file])
	  		redirect_to :back, notice: "CSV imported scuccessfuly."
	  	rescue 
	  		redirect_to :back, notice: "Invalid data in csv."
	  	end
  	end
  	def variants_import
  		begin
			product=Spree::Product.friendly.find(params[:product_id])
				Spree::Import.var_import_new(params[:file],product)
				redirect_to :back, notice: "CSV imported scuccessfuly."
				rescue => e
				redirect_to :back, notice: "#{e}"
			end	
  	end
end
