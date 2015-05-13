module Spree
  class HomeController < Spree::StoreController
    helper 'spree/products'
#    respond_to :html

    def index
      @searcher = build_searcher(params.merge(include_images: true))
      @products = @searcher.retrieve_products
      @taxonomies = Spree::Taxonomy.all
      @recommended_product=@products.where(:is_recommended=>true)

      render :template => "/spree/home/#{@selected_template.template_no}/index.html.erb", :locals => {:products => @products,:taxonomies => @taxonomies, :searcher => @searcher,:recommended_product => @recommended_product}
    end
  end
end
