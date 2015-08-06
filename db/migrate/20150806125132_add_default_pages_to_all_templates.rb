class AddDefaultPagesToAllTemplates < ActiveRecord::Migration
  def up
    law =  Spree::Template.find_by_name("Law").try(:id) rescue nil
    Spree::CmsPage.where(title: "Home", template_id: law).first.update_columns(title: "Home Content", static_flag: true)
    Spree::CmsPage.create(title: "Home", static_flag: false, default_flag: true, default_string: "home")
    Spree::CmsPage.create(title: "Product", static_flag: false, default_flag: true, default_string: "product")
    Spree::CmsPage.create(title: "Blog", static_flag: false, default_flag: true, default_string: "blog")
    Spree::CmsPage.create(title: "Contact", static_flag: false, default_flag: true, default_string: "contact")
  end

  def down
    law =  Spree::Template.find_by_name("Law").try(:id) rescue nil
    Spree::CmsPage.where(title: "Home Content", template_id: law).first.update_columns(title: "Home", static_flag: true)
  end
end
