class V1::ApiController < ApplicationController
  before_action :check_params, :authenticate_user
  before_action :check_date

  # // v1/api/products
  def products
    @products = Spree::Product.all
    respond_to do |format|
      format.xml { render xml: @products }
    end
  end

  # // v1/api/orders params => date, formatv=> YYYY-MM-DD
  def orders
    if params[:date]
      @orders = Spree::Order.where("DATE(created_at) = ?", params[:date])
      respond_to do |format|
        format.xml { render xml: @orders }
      end
    else
      @orders = Spree::Order.all.where("DATE(created_at) = DATE(?)", Time.now)
      respond_to do |format|
        format.xml { render xml: @orders }
      end
    end
  end

  def customers
    @customers = Spree::User.all
    respond_to do |format|
      format.xml { render xml: @customers }
    end
  end

  def add_product
    hash = params[:product]
    if hash.values.include? "" or hash.values.include? nil
      msg = {"error" => "Please complete all the fields"}
      json_response(msg)
    else
      ship_cat = is_shiping_category_exist(hash[:shipping_category_name])
      product_cat = is_product_category_exit(hash[:category_name])
      hash.delete(:shipping_category_name)
      hash.delete(:category_name)
      if @msg_ship or  @msg_cat
        final = {'error' => "#{@msg_ship}, #{@msg_cat}"}
        json_response(final)
      else
       product = Spree::Product.new(name: hash[:name], description: hash[:description], price: hash[:price], available_on: hash[:available_on])
       product.shipping_category_id = ship_cat.id
       product.taxons << product_cat
       product.sku = hash[:sku]
       product.save!

       msg = {'ok' => "Successfully uploaded"}
        respond_to do |format|
          format.xml { render xml: msg}
        end
      end
    end
  end

  private

  def check_params
    if params[:auth_token] && params[:secret]
      return true
    elsif params[:auth_token].present? && params[:secret].blank?
      @msg = {'error' => 'Please provide secret key'}
      json_response(@msg)
    elsif params[:auth_token].blank? && params[:secret].present?
      @msg = {'error' => 'Please provide auth token'}
      json_response(@msg)
    else
      @msg = {'error' => 'Please provide auth token and secret'}
      json_response(@msg)
    end
  end

  def authenticate_user
    if Spree::ApiUser.where(token: params[:auth_token]).first and Spree::ApiUser.where(secret_key: params[:secret]).first
      return true
    else
      @msg = {'error' => 'Please provide valid keys'}
      json_response(@msg)
    end
  end

  def is_shiping_category_exist(cat)
    @ship_name = Spree::ShippingCategory.where(:name => cat)
    if @ship_name.first
      return @ship_name.first
    else
      @msg_ship = 'Shipping category name is invalid'
      return false
    end
  end

  def is_product_category_exit(cat)
    if @ship_name
      name = Spree::Taxon.where(:name => cat)
      if name.first
        return name.first
      else
        @msg_cat = 'Product category name is invalid'
        return false
      end
    end
  end

  def check_date
    if params[:date]
      format = Date.parse(params[:date]) rescue nil
      unless format
        @msg = {'error' => 'Date format is invalid'}
        json_response(@msg)
      end
    end
  end

  def json_response msg
    respond_to do |format|
      format.json { render json: msg}
    end
  end



end
