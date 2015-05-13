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
end
