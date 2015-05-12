class Spree::Admin::OrganizationsController < Spree::Admin::ResourceController
  #before_action :set_organization, only: [:show, :edit, :update, :destroy]

  # GET /organizations
  # GET /organizations.json
  def index
    @organizations = Spree::Organization.all
  end

  # GET /organizations/1
  # GET /organizations/1.json
  def show
  end

  # GET /organizations/new
  def new
    @organization = Spree::Organization.new
  end

  # GET /organizations/1/edit
  def edit
    @organization=Spree::Organization.find(params[:id])
    2.times{@organization.org_addresses.build}
    if(@organization.org_addresses.length==0)
      @organization.org_addresses.create
    end
  end

  # POST /organizations
  # POST /organizations.json
  def create
    @organization = Spree::Organization.new(organization_params)

    respond_to do |format|
      if @organization.save
        format.html { redirect_to @organization, notice: 'Spree::Organization was successfully created.' }
        format.json { render action: 'show', status: :created, location: @organization }
      else
        format.html { render action: 'new' }
        format.json { render json: @organization.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /organizations/1
  # PATCH/PUT /organizations/1.json
  def update
    respond_to do |format|
      if @organization.update(organization_params)
        format.html { redirect_to edit_admin_organization_path(@organization), notice: 'Organization was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { redirect_to edit_admin_organization_path(@organization), notice: 'Organization was noy updated.Please update it again' }
        format.json { render json: @organization.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /organizations/1
  # DELETE /organizations/1.json
  def destroy
    @organization.destroy
    respond_to do |format|
      format.html { redirect_to organizations_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_organization
      params[:id]=1
      @organization = Spree::Organization.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def organization_params
      params.require(:organization).permit(:company_name,:company_code,:facebook_url,:twitter_url,:google_url,:central_time,org_addresses_attributes: [:id, :company_name, :country,:company_address,:city, :state, :postal_code,:phone_no, :_destroy])
      #params[:organization].permit[:all]
    end
end
