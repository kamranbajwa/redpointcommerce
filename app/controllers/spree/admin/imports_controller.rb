class Spree::Admin::ImportsController < Spree::Admin::ResourceController
	def p_import
    	Spree::Import.prodcut_import(params[:file])
    	redirect_to :back, notice: "Products imported."
  end
end
