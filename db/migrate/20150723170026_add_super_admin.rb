class AddSuperAdmin < ActiveRecord::Migration
  def self.up
  	u=Spree::User.new
  	u.email="admin@pshq.com"
  	u.password="12345678"
  	u.spree_roles=Spree::Role.all
  	u.save(:validate => false)
  end
  def self.down
  	Spree::User.find_by_email("admin@pshq.com").delete
  end
end
