module Spree
  class CmsPage < Spree::Base
    belongs_to :template
    validates :title, presence: true
  end
end
