module Spree
  class HomeController < Spree::StoreController
    helper 'spree/products'
#    respond_to :html

    def index
      @searcher = build_searcher(params.merge(include_images: true))
      @products = @searcher.retrieve_products
      @taxonomies = Spree::Taxonomy.all

      render :template => "/spree/home/#{@selected_template.template_no}/index.html.erb", :locals => {:products => @products,:taxonomies => @taxonomies, :searcher => @searcher }
    end
  end
end
