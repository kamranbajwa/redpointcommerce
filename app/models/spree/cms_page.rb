module Spree
  class CmsPage < Spree::Base
    belongs_to :template
  	acts_as_taggable
    validates :title, presence: true
  end
end
