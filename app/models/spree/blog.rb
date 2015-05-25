module Spree
  class Blog < Spree::Base
    acts_as_taggable
    has_attached_file :avatar
    validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/
  end
end