module Spree
  class StaticsController <  Spree::StoreController
   
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
      @blog_post = Spree::Blog.all
    end
    
    # Show Every Post
    def show_post
       @blog_post_show = Spree::Blog.find_by_permalink(params[:permalink])
    end
    
  end
end