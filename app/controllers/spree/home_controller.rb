module Spree
  class HomeController < Spree::StoreController
    helper 'spree/products'
#    respond_to :html

    def index
      @title=  "#{@org.company_name.present? ? @org.company_name : 'Home'}"
      @searcher = build_searcher(params.merge(include_images: true))
      @products = @searcher.retrieve_products
      @taxonomies = Spree::Taxonomy.all
      @recommended_products=Spree::Product.where(:is_recommended=>true).limit 5
      @best_selling_products=Spree::Product.all.includes(:orders).sort_by { |p| p.orders.size }.reverse.take(5)
      render :template => "/spree/home/#{@selected_template.template_no}/index.html.erb", :locals => {:products => @products,:taxonomies => @taxonomies, :searcher => @searcher,:recommended_products => @recommended_products,:best_selling_products => @best_selling_products }
    end
  end
end
