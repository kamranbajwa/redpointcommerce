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
          notice = "Image Successfully Uploaded"
        else
          notice = "Total Images Exceeded"
        end
        redirect_to admin_product_images_url(@product), notice: notice
      end

      def update
        alt = image_params[:alt]
        viewable_id = image_params[:viewable_id]
        @image = scope.images.accessible_by(current_ability, :update).find(params[:id])
        if image_params[:attachment]
          image_st = params[:image_data].split(',')[1]
          decoded_data = Base64.decode64(image_st)
          data = StringIO.new(decoded_data)
          attachment = image_params[:attachment].first
          if params[:skip_crop]!= "true"
            @image.update_attributes(alt: alt, viewable_id: viewable_id, attachment:  data)
          else
           @image.update_attributes(alt: alt, viewable_id: viewable_id, attachment:  attachment)
         end
       else
          @image.update_attributes(alt: alt, viewable_id: viewable_id)
       end
       notice = "Image Successfully Updated"
       redirect_to admin_product_images_url(@product), notice: notice
     end

        #  def crop
        
        # end

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
          @product_dimension = Spree::Image.attachment_definitions[:attachment][:styles][:product].split("x").map(&:to_i)
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
          if image_params[:attachment].length == 1 and params[:skip_crop]!= "true"
          image_st = params[:image_data].split(',')[1]
          decoded_data = Base64.decode64(image_st)
          data = StringIO.new(decoded_data)
             alt = image_params[:alt]
          viewable_id = image_params[:viewable_id]
          @image = scope.images.create(alt: alt, viewable_id: viewable_id, attachment: data)
        else
          if image_params[:attachment].count <= 10
            image_params[:attachment].each do |attachment|
           alt = image_params[:alt]
           viewable_id = image_params[:viewable_id]
            @image = scope.images.create(alt: alt, viewable_id: viewable_id, attachment: attachment)
            end
            return true
          else
            return false
          end
        end
        end
      end
    end
  end
