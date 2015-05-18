require 'securerandom'
class Spree::Admin::ApiUsersController < Spree::Admin::ResourceController
  before_action :set_keys, only: [:create]
  
  def index
    @api_users = Spree::ApiUser.all
  end

  def new
    @api_user =  Spree::ApiUser.new
  end

  def create
    @api_user =  Spree::ApiUser.new(api_user_params)
    if @api_user.save
      redirect_to action: 'show', id:  @api_user.id
    else
      redirect_to new_admin_api_user_path, notice: "#{@api_user.errors.full_messages.first}"
    end
  end

  def show
    @api_user =  Spree::ApiUser.find(params[:id])
  end

  def destroy
    @user = Spree::ApiUser.find(params[:id])
    if @user.destroy
      flash[:notice] = "Successfully Deleted"
      redirect_to admin_api_users_path
    end
  end

  private

    def api_user_params
      params.require(:api_user).permit(:name, :email, :token, :secret_key)
    end

    def set_keys
      params[:api_user][:token] = SecureRandom.hex(8)
      params[:api_user][:secret_key] = SecureRandom.hex(16)
    end
end
