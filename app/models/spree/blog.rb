module Spree
  class Blog < Spree::Base
    acts_as_taggable
    has_attached_file :avatar, styles: {blarge: "700x500!", small:    "100x100>"}
    validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/
  end
end