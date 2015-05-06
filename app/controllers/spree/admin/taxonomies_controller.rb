module Spree
  module Admin
    class TaxonomiesController < ResourceController
      respond_to :json, only: [:get_children]

      def get_children
        @taxons = Taxon.find(params[:parent_id]).children
      end

      def index
        respond_with(taxonomies)
      end

      def show
        respond_with(taxonomy)
      end

      def new
        @taxonomy = Taxonomy.new
      end

      def create
        authorize! :create, Taxonomy
        @taxonomy = Taxonomy.new(taxonomy_params)
        if @taxonomy.save
          redirect_to action: "index"
        else
          invalid_resource!(@taxonomy)
        end
      end

      def update
        authorize! :update, taxonomy
        if taxonomy.update_attributes(taxonomy_params)
          redirect_to action: "index"
        else
          invalid_resource!(taxonomy)
        end
      end

      private

      def taxonomy
        @taxonomy ||= Taxonomy.accessible_by(current_ability, :read).find(params[:id])
      end

      def taxonomies
        @taxonomies = Taxonomy.accessible_by(current_ability, :read).order('name').includes(:root => :children).
                        ransack(params[:q]).result.
                        page(params[:page]).per(params[:per_page])
      end

      def taxonomy_params
        if params[:taxonomy] && !params[:taxonomy].empty?
          params.require(:taxonomy).permit(:name, :cat_image)
        else
          {}
        end
      end

      def location_after_save
        if @taxonomy.created_at == @taxonomy.updated_at
          edit_admin_taxonomy_url(@taxonomy)
        else
          admin_taxonomies_url
        end
      end
    end
  end
end
