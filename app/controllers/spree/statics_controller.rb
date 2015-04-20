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
        @page_data = Spree::CmsPage.find(params[:id])
    end
    
  end
end