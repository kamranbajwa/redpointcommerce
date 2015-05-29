class Spree::Admin::PromotionEmailsController < Spree::Admin::ResourceController
def index
    @promotion_emails = Spree::PromotionEmail.all
  end

  # GET /promotion_emails/1
  # GET /promotion_emails/1.json
  def show
    redirect_to :admin_promotion_emails , notice: 'Promotion emails was not updated. Please try again'
  end

  # GET /promotion_emails/new
  def new
    @promotion_email = Spree::PromotionEmail.new
  end

  # GET /promotion_emails/1/edit
  def edit
    @promotion_email = Spree::PromotionEmail.find(params[:id])
  end

  # Subcriber Promotional Email
  def select_user
    @promotion_email = Spree::PromotionEmail.find(params[:id])
    @users = Spree::Subscribe.all
  end

  def send_emails
    tmp=Spree::PromotionEmail.find(params[:id])
    if params[:emails]!="" and params[:emails]!=nil
    subscriber_list= params[:emails]
    Spree::PromotionMailer.send_promotion_mail(tmp,subscriber_list).deliver
    flash[:success] = "Promotion mail sent"
    redirect_to :admin_promotion_emails
  else
    flash[:success] = "Please select an email address to send promotion"
    redirect_to :back
  end
  end

  # POST /promotion_emails
  # POST /promotion_emails.json
  def create
    @promotion_email = Spree::PromotionEmail.new(promotion_email_params)

      if @promotion_email.save
        redirect_to :action => :select_user, :id => @promotion_email.id
        #format.html { redirect_to adminpromotion_emails_url, notice: 'Promotion email was successfully created.' }
        #format.json { render action: 'show', status: :created, location: @promotion_email }
      else
        redirect_to :back, notice: "Promtion mail was not created please try again"
        #format.html { render action: 'new' }
        #format.json { render json: @promotion_email.errors, status: :unprocessable_entity }
    end
  end

  # PATCH/PUT /promotion_emails/1
  # PATCH/PUT /promotion_emails/1.json
  def update
      if @promotion_email.update(promotion_email_params)
        redirect_to :action => :select_user
        #format.html { redirect_to :back, notice: 'Promotion email was successfully updated.' }
        
      else
        redirect_to :back, notice: "Email with empty body or title can't be sent"
      end
  end

  # DELETE /promotion_emails/1
  # DELETE /promotion_emails/1.json
  def destroy
    @promotion_email.destroy
    respond_to do |format|
      format.html { redirect_to admin_promotion_emails_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_promotion_email
      @promotion_email = Spree::PromotionEmail.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def promotion_email_params
      #params[:promotion_email]
      params.require(:promotion_email).permit(:title,:body )
    end
end
