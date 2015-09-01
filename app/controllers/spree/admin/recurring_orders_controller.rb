class Spree::Admin:: RecurringOrdersController < Spree::Admin::ResourceController
	def index
		@recurring_orders=Spree::RecurringOrder.all
	end
	
end
