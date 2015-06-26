module Spree
  class TaxonsController < Spree::StoreController
    rescue_from ActiveRecord::RecordNotFound, :with => :render_404
    helper 'spree/products'

    respond_to :html

    def show
      @taxon = Taxon.find_by_permalink!(params[:id])
      return unless @taxon
      @title=  "#{@selected_template.name} : #{@taxon.name}"
      @searcher = build_searcher(params.merge(taxon: @taxon.id, include_images: true))
      @products = @searcher.retrieve_products
      @taxonomies = Spree::Taxonomy.includes(root: :children)
       render :template => "/spree/shared/#{@selected_template.template_no}/products_index.html.erb", :locals => {:products => @products,:taxonomies => @taxonomies, :searcher => @searcher, :taxon =>@taxon }
    end

    private

    def accurate_title
      if @taxon
        @taxon.seo_title
      else
        super
      end
    end

  end
end
