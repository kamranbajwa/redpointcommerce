module Spree
  class StaticsController <  Spree::StoreController
   skip_before_action :verify_authenticity_token , :only => [:subcriptions]
    def contactus
    end
  
    def faq
    end
  
    def aboutus
    end
  
    def termsandconditions
    end
  
    def privacypolicy
    end

    def pages
        @page_data = Spree::CmsPage.find(params[:id]) rescue nil
        if @page_data
            render 'pages'
        else
            redirect_to root_path
        end
    end
    # Get Blog Main Page
    def blog
    end
    
    # Show Every Post
    def show_post
       @blog_post_show = Spree::Blog.find_by_permalink(params[:permalink])
    end
    
    # Start Subcription Email 
    def subcriptions
      @subscibed_email = Spree::Subscribe.new
      if params[:email].blank?
        text = 'blank'
      else
        @already_exist = Spree::Subscribe.find_by_subcription_email(params[:email])
        if @already_exist.blank? 
            @subscibed_email.subcription_email= params[:email]
              if @subscibed_email.save
                  text = 'insert'
              else
                  text = 'notinsert'
              end
        else
          text ="already"
        end
      end
        render :text => text
    end
        # End Subcription Email 

  end
end