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
