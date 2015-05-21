class Spree::Admin::UserGroupsController < Spree::Admin::ResourceController
  before_action :set_user, only: [:select_group, :assign_group]

  def select_group
  end

  def assign_group
    @group = Spree::UserGroup.find(params[:post][:group_id])
    if @group.present?
      @group.users << @user
    end
    redirect_to :back
  end

  private

  def set_user
    @user = Spree::User.find(params[:id])
  end

end
