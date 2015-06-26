class Spree::Admin::WidgetsController < Spree::Admin::ResourceController

	def index
		@widgets =  Spree::Widget.all
	end

	def create
		
	end
end
