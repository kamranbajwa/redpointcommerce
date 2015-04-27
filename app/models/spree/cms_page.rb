module Spree
  class CmsPage < Spree::Base
    belongs_to :template
  	acts_as_taggable
    validates_uniqueness_of :title
    validates :title, presence: true

    scope :static, -> { where(static_flag: true) }
    scope :dynamic, -> { where(static_flag: false) }
  end
end
