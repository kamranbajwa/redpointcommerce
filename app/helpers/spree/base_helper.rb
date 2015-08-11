module Spree
  module BaseHelper
    def radio_variant_display
     if @selected_template.variant_display_type
      return false
      else
        return true
      end
    end
    def address_name(k)
      if k=="address1"
        return "Billing Address"
        else
          return "Shipping Address"
        end
    end
    def version_changes_name(k)
      if k == "approver_id"
        return "Approved By"
      elsif k== "canceler_id"
        return "Canceled By"
          else
            return k.gsub(/[^0-9A-Za-z]/, ' ')
      end 
    end
    def order_version_change_from(k,v)
      if k == "approver_id" or k=="canceler_id"
        u_id=v[1].present? ? v[1] : v[0]
       u= Spree::User.find_by_id(u_id)
       return u.first_name
     else
    version_change_from(v) 
  end
    end
    def version_change_from(v)
    if v[0].present? and v[1].present?
     return v[0].to_s+" to " +v[1].to_s
      else
        return v[0].to_s+" "+v[1].to_s
      end
  end
    def set_paths(page)
      if page.default_string == 'home'
        return '/'
      elsif page.default_string == 'product'
        return '/products'
      elsif page.default_string == 'blog'
        return '/blog'
      elsif page.default_string == 'contact'
        return '/contact-us'
      else
        return "/page/#{page.slug}"
      end
    end
    def is_active?(link_path)
    current_page?(link_path) ? "active" : ""
    end
    def is_visible(section)
      @template_sections.where(default_name: section).first.try(:visible) ? "block" : "none"
    end
    def footer_color
      is_allowed_custom_theme ? @template_components.footer.color : ''
    end
     def header_color
       is_allowed_custom_theme ? @template_components.header.color : ''
    end
    def header_font
      is_allowed_custom_theme ? @template_components.header_font.color : ''
    end
     def footer_font
      is_allowed_custom_theme ? @template_components.footer_font.color : ''
    end
    def is_allowed_custom_theme
      @selected_template.is_allowed_custom_theme rescue false
    end
    def options_for_shipment_states
      [["Back Order", "backorder"], ["Canceled", "canceled"], ["Partial", "partial"],["Ready", "ready"],["Pending", "pending"],["Shipped", "shipped"]]
    end
    def options_for_payment_states
      [["Balance Due", "balance_due"], ["Checkout", "checkout"], ["Paid", "paid"],["Completed", "completed"], ["Credit Owed", "credit_owed"],["Failed", "failed"],["Pending", "pending"],["Processing", "processing"],["Void", "void"]]
    end
    def org_address
      address=Spree::OrgAddress.first
      arr_add=[]
      if address.present? 
      address=address.company_address+","+address.city+","+address.state+","+address.country rescue ''
      phone=address.phone_no rescue ''
    else
      address = "Joher Town Lahore, Punjab, Pakistan"
      phone = "+921111333334"
    end
     arr_add << address
     arr_add << phone
     arr_add << Spree::Store.first.url 
      return arr_add
    end
    def show_product_on_pages(page,p_on_current_page)
      page_no=page
      product_on_current_page=p_on_current_page
      total_product=Spree::Product.count
      display_count=(page_no.to_i-1)*12+product_on_current_page.to_i
      staring_p_count=(page_no.to_i-1)*12+1
      return [display_count,staring_p_count,total_product]
    end

def link_to_add_fields_o(name, f, association)  
  new_object = f.object.class.reflect_on_association(association).klass.new  
  fields = f.fields_for(association, new_object, :child_index => "new_#{association}") do |builder|  
    render(association.to_s.singularize + "_fields", :f => builder)  
  end  
  link_to name, "#", :onclick => h("add_fields_o(this, \"#{association}\", \"#{escape_javascript(fields)}\")"),:style => "color:white"
end  
def link_to_remove_fields_o(name, f)
    #f.hidden_field :_destroy + 
    link_to name,"#", :onclick =>  h("remove_fields_o(this)")
  end
    # Defined because Rails' current_page? helper is not working when Spree is mounted at root.
    def current_spree_page?(url)
      path = request.fullpath.gsub(/^\/\//, '/')
      if url.is_a?(String)
        return path == url
      elsif url.is_a?(Hash)
        return path == spree.url_for(url)
      end
      return false
    end

    def link_to_cart(text = nil)
      text = text ? h(text) : Spree.t('cart')
      css_class = nil

      if simple_current_order.nil? or simple_current_order.item_count.zero?
        text = "#{text}: (#{Spree.t('empty')})"
        css_class = 'empty'
      else
        text = "#{text}: (#{simple_current_order.item_count})  <span class='amount'>#{simple_current_order.display_total.to_html}</span>"
        css_class = 'full'
      end

      link_to text.html_safe, spree.cart_path, :class => "cart-info #{css_class}"
    end

    # human readable list of variant options
    def variant_options(v, options={})
      #content_tag(:ul, :class => "list")
     # v.options_text
      if variant_price v 
           v.options_text.to_s + " " + (variant_price v).to_s
      else
        v.options_text
    end
  end

    def meta_data
      object = instance_variable_get('@'+controller_name.singularize)
      meta = {}

      if object.kind_of? ActiveRecord::Base
        meta[:keywords] = object.meta_keywords if object[:meta_keywords].present?
        meta[:description] = object.meta_description if object[:meta_description].present?
      end

      if meta[:description].blank? && object.kind_of?(Spree::Product)
        meta[:description] = strip_tags(truncate(object.description, length: 160, separator: ' '))
      end

      meta.reverse_merge!({
          keywords: current_store.meta_keywords,
          description: current_store.meta_description,
        }) if meta[:keywords].blank? or meta[:description].blank?
      meta
    end

    def meta_data_tags
      meta_data.map do |name, content|
        tag('meta', name: name, content: content)
      end.join("\n")
    end

    def body_class
      @body_class ||= content_for?(:sidebar) ? 'two-col' : 'one-col'
      @body_class
    end

    def logo(image_path=Spree::Config[:logo])
      link_to image_tag(image_path), spree.root_path
    end

    def flash_messages(opts = {})
      ignore_types = ["order_completed"].concat(Array(opts[:ignore_types]).map(&:to_s) || [])

      flash.each do |msg_type, text|
        unless ignore_types.include?(msg_type)
          concat(content_tag :div, text, class: "flash #{msg_type}")
          end
        end
        nil
      end

      def breadcrumbs(taxon, separator="&nbsp;&raquo;&nbsp;", breadcrumb_class="inline")
        return "" if current_page?("/") || taxon.nil?

        crumbs = [[Spree.t(:home), spree.root_path]]

        if taxon
          crumbs << [Spree.t(:products), products_path]
          crumbs += taxon.ancestors.collect { |a| [a.name, spree.nested_taxons_path(a.permalink)] } unless taxon.ancestors.empty?
          crumbs << [taxon.name, spree.nested_taxons_path(taxon.permalink)]
        else
          crumbs << [Spree.t(:products), products_path]
        end

        separator = raw(separator)

        crumbs.map! do |crumb|
          content_tag(:li, itemscope:"itemscope", itemtype:"http://data-vocabulary.org/Breadcrumb") do
            link_to(crumb.last, itemprop: "url") do
              content_tag(:span, crumb.first, itemprop: "title")
            end + (crumb == crumbs.last ? '' : separator)
          end
        end

        content_tag(:nav, content_tag(:ul, raw(crumbs.map(&:mb_chars).join), class: breadcrumb_class), id: 'breadcrumbs', class: 'sixteen columns')
          end

          def taxons_tree(root_taxon, current_taxon, max_level = 1)
            return '' if max_level < 1 || root_taxon.children.empty?
            content_tag :ul, class: 'nav nav-tabs nav-tab-line' do
                root_taxon.children.map do |taxon|
                  #                  css_class = (current_taxon && current_taxon.self_and_ancestors.include?(taxon)) ? 'current' : nil
                  content_tag :li do
                    link_to(taxon.name, seo_url(taxon),:class => "cat123",:remote=>true) +
                      taxons_tree(taxon, current_taxon, max_level - 1)
                  end
                end.join().html_safe
              end
            end
          def taxons_tree_products(root_taxon, current_taxon, max_level = 1)
            return '' if max_level < 1 || root_taxon.children.empty?
            #content_tag :ul, class: 'nav nav-tabs nav-tab-line' do
                root_taxon.children.map do |taxon|
                  #                  css_class = (current_taxon && current_taxon.self_and_ancestors.include?(taxon)) ? 'current' : nil
                  content_tag :li do
                    link_to(taxon.name, seo_url(taxon)) +
                      taxons_tree(taxon, current_taxon, max_level - 1)
                  end
                end.join().html_safe
              #end
            end
            def taxons_tree_products_shoes(root_taxon, current_taxon, max_level = 1)
               return '' if max_level < 1 || root_taxon.children.empty?
               root_taxon.children.map do |taxon|
                  #                  css_class = (current_taxon && current_taxon.self_and_ancestors.include?(taxon)) ? 'current' : nil
                  content_tag :li do
                    link_to(taxon.name, seo_url(taxon),:class=>"" ) +
                      taxons_tree(taxon, current_taxon, max_level - 1)
                  end
                end.join().html_safe
            end
            
            def taxons_tree_products_list(root_taxon, current_taxon, max_level = 1)
            return '' if max_level < 1 || root_taxon.children.empty?
            content_tag :ul, class: 'nav nav-tab-line' do
                root_taxon.children.map do |taxon|
                  #                  css_class = (current_taxon && current_taxon.self_and_ancestors.include?(taxon)) ? 'current' : nil
                  content_tag :li do
                    content_tag :i,style: 'color:#ddd', class: 'fa fa-circle-o' do
                    link_to(taxon.name, seo_url(taxon),:class => "cat123 fontstyle",:style=>"margin-left:4px;") +
                      taxons_tree(taxon, current_taxon, max_level - 1)
                    end
                  end
                end.join().html_safe
              end
            end

            def taxons_tree_products_list_doctor(root_taxon, current_taxon, max_level = 1)
            return '' if max_level < 1 || root_taxon.children.empty?
            content_tag :ul, class: 'nav-cat nav-list text-left' do
                root_taxon.children.map do |taxon|
                  content_tag :li do
                    content_tag :i, class: 'fa fa-circle-o' do
                    link_to(taxon.name, seo_url(taxon)) +
                      taxons_tree(taxon, current_taxon, max_level - 1)
                    end
                  end
                end.join().html_safe
              end
            end

            def available_countries
              checkout_zone = Zone.find_by(name: Spree::Config[:checkout_zone])

              if checkout_zone && checkout_zone.kind == 'country'
                countries = checkout_zone.country_list
              else
                countries = Country.all
              end

              countries.collect do |country|
                country.name = Spree.t(country.iso, scope: 'country_names', default: country.name)
                country
              end.sort_by { |c| c.name.parameterize }
            end

            def seo_url(taxon)
              return spree.nested_taxons_path(taxon.permalink)
            end

            def gem_available?(name)
              Gem::Specification.find_by_name(name)
            rescue Gem::LoadError
              false
            rescue
              Gem.available?(name)
            end

            def display_price(product_or_variant)
              product_or_variant.price_in(current_currency).display_price.to_html
            end

            def pretty_time(time)
              [(time.to_date.strftime("%m/%d/%Y")),
                time.utc.strftime("%H:%M:%S")].join(" ")
            end

            def method_missing(method_name, *args, &block)
              if image_style = image_style_from_method_name(method_name)
                define_image_method(image_style)
                self.send(method_name, *args)
              else
                super
              end
            end

            def link_to_tracking(shipment, options = {})
              return unless shipment.tracking && shipment.shipping_method

              if shipment.tracking_url
                link_to(shipment.tracking, shipment.tracking_url, options)
              else
                content_tag(:span, shipment.tracking)
              end
            end

            private

            # Returns style of image or nil
            def image_style_from_method_name(method_name)
              if method_name.to_s.match(/_image$/) && style = method_name.to_s.sub(/_image$/, '')
                possible_styles = Spree::Image.attachment_definitions[:attachment][:styles]
                style if style.in? possible_styles.with_indifferent_access
              end
            end

            def create_product_image_tag(image, product, options, style)
              options.reverse_merge! alt: image.alt.blank? ? product.name : image.alt
              image_tag image.attachment.url(style), options
            end

            def define_image_method(style)
              self.class.send :define_method, "#{style}_image" do |product, *options|
                options = options.first || {}
                if product.images.empty?
                  if !product.is_a?(Spree::Variant) && !product.variant_images.empty?
                    create_product_image_tag(product.variant_images.first, product, options, style)
                  else
                    if product.is_a?(Variant) && !product.product.variant_images.empty?
                      create_product_image_tag(product.product.variant_images.first, product, options, style)
                    else
                      image_tag "noimage/#{style}.png", options
                    end
                  end
                else
                  create_product_image_tag(product.images.first, product, options, style)
                end
              end
            end
          end
        end
