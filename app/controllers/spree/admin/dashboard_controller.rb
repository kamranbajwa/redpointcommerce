class Spree::Admin::DashboardController < Spree::Admin::BaseController
  before_action :orders
  before_action :get_data, :today, :yesterday

  def index
    progress
  end

  def progress
    if sum(@yesterday_orders).to_i > 0
      @progress = sum(@yesterday_orders).to_i / sum(@today_orders).to_i * 100
    end
  end

  def change
  end

  def growth
  end

  def check_negative
  end

  private

  def today
     @today_orders = @orders.where("created_at = ?", Date.today)
  end

  def yesterday
     @yesterday_orders = @orders.where("created_at = ?", Date.yesterday)
  end

  def sum(orders)
    orders.sum(:total).to_f
  end

  def get_data
    @total_amount = sum(@orders)
    @total_count =  @orders.count
    @total_users =  Spree::User.all.count
    @average_orders = @total_amount / @total_count
  end

  def orders
    @orders = Spree::Order.all
  end
end
