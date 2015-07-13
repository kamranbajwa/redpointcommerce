module Spree
  class CmsPage < Spree::Base
    extend FriendlyId
    friendly_id :title, use:  [:slugged, :finders]
    belongs_to :template
  	acts_as_taggable
    validates :title, :uniqueness => {:scope => [:template_id], :case_sensitive => false}
    has_attached_file :avatar, styles: {home_image: "700x500!"}
    # validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/

    scope :static, -> { where(static_flag: true) }
    scope :dynamic, -> { where(static_flag: false) }
    scope :default, -> { where(default_flag: true) }
    has_paper_trail

    def check_default?
        self.default_flag
    end
    def check_static?
        self.static_flag
    end
    def should_generate_new_friendly_id?
        new_record? || slug.blank?
    end
  end
end
