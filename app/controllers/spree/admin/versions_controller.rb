class Spree::Admin::VersionsController < Spree::Admin::ResourceController
def index
	@versions = PaperTrail::Version.order('created_at DESC')
end
def show
	
end
def products_versions
	@products=Spree::Product.all
end
def users_versions
	@users=Spree::User.all
end
def orders_versions
	@orders=Spree::Order.all
end
end
