module Spree
  class CmsPage < Spree::Base
    belongs_to :template
  	acts_as_taggable
    validates_uniqueness_of :title
    validates :title, presence: true
  end
end
