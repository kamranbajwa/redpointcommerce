class Spree::Admin::VersionsController < Spree::Admin::ResourceController
def index
	@versions = PaperTrail::Version.order('created_at DESC')
end
def show
	sdfdfdfd
end
def all_user
	@users=Spree::User.all
end
def products_versions
	@products=Spree::Product.all
	render :template => "/spree/admin/versions/orders_versions.html.erb", :locals => {:@orders => @products}
end
def users_versions	
	@usr=Spree::User.find(params[:user_id])
end
def orders_versions
	@orders=Spree::Order.all
end
def address_versions
	@address=Spree::Address.all
	render :template => "/spree/admin/versions/orders_versions.html.erb", :locals => {:@orders => @address}
end
end
