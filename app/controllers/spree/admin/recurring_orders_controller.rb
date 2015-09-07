class Spree::Admin:: RecurringOrdersController < Spree::Admin::ResourceController
	def index
		@recurring_orders=Spree::RecurringOrder.all
	end
	def edit
		@recurring_order =  Spree::RecurringOrder.find(params[:id])
	end
	def update
		respond_to do |format|
		if @recurring_order.update_attributes(recurring_order_params)
		format.html { redirect_to :back, notice: "Updated Succfully"}
	else
    format.html { render action: 'edit' }
  end
end
	end
	def daily
		daily_recurring_orders = Spree::RecurringOrder.where(:recurring_type=> 'daily')
		render :template => '/spree/admin/recurring_orders/index.html.erb',:locals => {:@recurring_orders => daily_recurring_orders}
	end
	def weekly
		weekly_recurring_orders = Spree::RecurringOrder.where(:recurring_type=> 'weekly')
		render :template => '/spree/admin/recurring_orders/index.html.erb',:locals => {:@recurring_orders => weekly_recurring_orders}
	end
	def monthly
		monthly_recurring_orders = Spree::RecurringOrder.where(:recurring_type=> 'monthly')
		render :template => '/spree/admin/recurring_orders/index.html.erb',:locals => {:@recurring_orders => monthly_recurring_orders}
	end
	def yearly
		monthly_recurring_orders = Spree::RecurringOrder.where(:recurring_type=> 'yearly')
		render :template => '/spree/admin/recurring_orders/index.html.erb',:locals => {:@recurring_orders => monthly_recurring_orders}
	end
	private
		def recurring_order_params
			 params.require(:recurring_order).permit(:shipment_state)
		end
end
