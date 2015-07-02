module Spree
  class ProductsController < Spree::StoreController
    before_action :load_product, only: :show
    before_action :search_products, only: :index
    before_action :load_taxon, only: :index

    rescue_from ActiveRecord::RecordNotFound, :with => :render_404
    helper 'spree/taxons'

    respond_to :html

    def index
      if @selected_template.template_no == "2" ||  @selected_template.template_no== "3" 
      @title="Services"
      else
        @title="Prodcut"
      end
      
      @taxonomies = Spree::Taxonomy.all
      render :template => "/spree/shared/#{@selected_template.template_no}/products_index.html.erb", :locals => {:products => @products,:taxonomies => @taxonomies, :searcher => @searcher, :taxon =>@taxon }
    end

    def show
      
      @variants = @product.variants_including_master.active(current_currency).includes([:option_values, :images])
      @product_properties = @product.product_properties.includes(:property)
      @taxon = Spree::Taxon.find(params[:taxon_id]) if params[:taxon_id]
      @product = @products.friendly.find(params[:id])
      @taxns=@product.taxons.first
      if @taxns
        @simlier_product=  @taxns.products.limit(4).offset(1)
      else
        @simlier_product = @products.limit 4 
      end
      @title="Prodcut: "+ @product.name

    end
    private
    def search_products

      @searcher = build_searcher(params.merge(include_images: true))
      @products = @searcher.retrieve_products
        if params[:AZ]=="true"
          @products=@products.order(:name)
        elsif params[:ZA]=="true"
          @products=@products.order(:name).reverse
        elsif params[:HL]=="true"
          @products=@products.descend_by_master_price
        elsif  params[:LH]=="true"
          @products=@products.ascend_by_master_price
        end
    end
      def accurate_title
        if @product
          @product.meta_title.blank? ? @product.name : @product.meta_title
        else
          super
        end
      end

      def load_product
        if try_spree_current_user.try(:has_spree_role?, "admin")
          @products = Product.with_deleted
        else
          @products = Product.active(current_currency)
        end
        @product = @products.friendly.find(params[:id])
      end

      def load_taxon
        @taxon = Spree::Taxon.find(params[:taxon]) if params[:taxon].present?
      end
  end
end
