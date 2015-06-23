class Spree::Admin::DashboardController < Spree::Admin::BaseController
  before_action :orders, :users
  before_action :get_data, :today, :yesterday, :today_users, :yesterday_users, :calculate_sales
  before_action :overview

  def index
    progress
    @user_change = change( @today_users, @yesterday_users)
    @orders_change = change(@today_orders_count, @yesterday_orders_count)
  end

  def progress
    @progress = 0
    if sum(@yesterday_orders).to_i < sum(@today_orders).to_i
      total = sum(@yesterday_orders).to_i / sum(@today_orders).to_i * 100
      @progress = 100 - total
    elsif sum(@yesterday_orders).to_i == 0 and sum(@today_orders).to_i > 0
      @progress = 100
    end
  end


  private

  def change(present, past)
    @change = 0
    difference = present - past
    @change = difference / past * 100
  end

  def top_selling
  end

  def recommended

  end

  def overview
    @recommended_products=Spree::Product.where(:is_recommended=>true).limit 5
    @best_selling_products=Spree::Product.all.includes(:orders).sort_by { |p| p.orders.size }.reverse.take(5)
    @customer = {}
    Spree::User.all.each_with_index do |user, index|
      @customer[index] = {:email => user.email, :count => user.orders.count, :total => sum(user.orders)}
    end
  end

  def today
    @today_orders = @orders.where("created_at = ?", Date.today)
    @today_orders_count = @orders.where("created_at <= ?", Date.today).count
  end

  def yesterday
    @yesterday_orders = @orders.where("created_at = ?", Date.yesterday)
    @yesterday_orders_count = @orders.where("created_at <= ?", Date.yesterday).count
  end

  def today_users
     @today_users = Spree::User.where("created_at <= ?", Date.today).count
  end

  def yesterday_users
     @yesterday_users = Spree::User.where("created_at <= ?", Date.yesterday).count
  end

  def sum(orders)
    orders.sum(:total).to_f
  end

  def get_data
    @total_amount = sum(@orders)
    @total_count =  @orders.count
    @total_users =   @users.count
    @average_orders = @total_amount / @total_count
  end

  def orders
    @orders = Spree::Order.all
  end

  def users
    @users = Spree::User.all
  end

  def calculate_sales
    @total_sales = 0
     @orders.each do |order|
      @total_sales += order.display_item_total.money
    end
  end
end
