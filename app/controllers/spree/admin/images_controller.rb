module Spree
  module Admin
    class ImagesController < ResourceController
      before_action :load_edit_data, except: :index
      before_action :load_index_data, only: :index

      create.before :set_viewable
      update.before :set_viewable

        def create
          authorize! :create, Image
          if set_and_create_images
            notice = "Successfully Uploaded"
          else
            notice = "Total Images Exceeded"
          end
        redirect_to :back, notice: notice
        end

        def update
          if image_params[:attachment]
            attachment = image_params[:attachment].first
            alt = image_params[:alt]
            viewable_id = image_params[:viewable_id]
            @image = scope.images.accessible_by(current_ability, :update).find(params[:id])
            @image.update_attributes(alt: alt, viewable_id: viewable_id, attachment: attachment)
          end
          redirect_to :back
        end

      private

        def image_params
          params.require(:image).permit(:alt, :viewable_id, {:attachment => []})
        end

        def scope
          if params[:product_id]
            Spree::Product.friendly.find(params[:product_id])
          elsif params[:variant_id]
            Spree::Variant.find(params[:variant_id])
          end
        end

      def location_after_destroy
        admin_product_images_url(@product)
      end

      def location_after_save
        admin_product_images_url(@product)
      end

      def load_index_data
        @product = Product.friendly.includes(*variant_index_includes).find(params[:product_id])
      end

      def load_edit_data
        @product = Product.friendly.includes(*variant_edit_includes).find(params[:product_id])
        @variants = @product.variants.map do |variant|
          [variant.sku_and_options_text, variant.id]
        end
        @variants.insert(0, [Spree.t(:all), @product.master.id])
      end

      def set_viewable
        @image.viewable_type = 'Spree::Variant'
        @image.viewable_id = params[:image][:viewable_id]
      end

      def variant_index_includes
        [
          variant_images: [viewable: { option_values: :option_type }]
        ]
      end

      def variant_edit_includes
        [
          variants_including_master: { option_values: :option_type, images: :viewable }
        ]
      end

      def set_and_create_images
       alt = image_params[:alt]
        viewable_id = image_params[:viewable_id]
        if image_params[:attachment].count <= 10
          Thread.new do
            image_params[:attachment].each do |attachment|
              @image = scope.images.create(alt: alt, viewable_id: viewable_id, attachment: attachment)
            end
          end
          return true
        else
          return false
        end
      end
    end
  end
end
