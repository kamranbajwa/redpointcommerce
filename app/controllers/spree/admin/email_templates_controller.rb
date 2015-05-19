class Spree::Admin::EmailTemplatesController < Spree::Admin::ResourceController
  before_action :set_emailtemplate, only: [:show, :edit, :update, :destroy]

  # GET /emailtemplates
  # GET /emailtemplates.json
  def index
    @emailtemplates = Spree::EmailTemplate.all
  end

  # GET /emailtemplates/1
  # GET /emailtemplates/1.json
  def show
  end

  # GET /emailtemplates/new
  def new
    @emailtemplate = Spree::EmailTemplate.new
  end

  # GET /emailtemplates/1/edit
  def edit
    @emailtemplates = Spree::EmailTemplate.all
  end

  # POST /emailtemplates
  # POST /emailtemplates.json
  def create
    @emailtemplate = Spree::EmailTemplate.new(emailtemplate_params)

    respond_to do |format|
      if @emailtemplate.save
        format.html { redirect_to @emailtemplate, notice: 'EmailTemplate was successfully created.' }
        format.json { render action: 'show', status: :created, location: @emailtemplate }
      else
        format.html { render action: 'new' }
        format.json { render json: @emailtemplate.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /emailtemplates/1
  # PATCH/PUT /emailtemplates/1.json
  def update
    respond_to do |format|
      if @emailtemplate.update(emailtemplate_params)
        format.html { redirect_to :back, notice: 'Email Template was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @emailtemplate.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /emailtemplates/1
  # DELETE /emailtemplates/1.json
  def destroy
    @emailtemplate.destroy
    respond_to do |format|
      format.html { redirect_to emailtemplates_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_emailtemplate
      @emailtemplate = Spree::EmailTemplate.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def emailtemplate_params
      params[:email_template].permit!
    end
end
