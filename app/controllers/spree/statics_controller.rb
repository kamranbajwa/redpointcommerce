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
    
  end
end