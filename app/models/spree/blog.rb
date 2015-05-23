module Spree
  class Blog < Spree::Base
    acts_as_taggable
    has_attached_file :avatar, :styles => { :blarge =>"700x500!",:medium => "300x300>", :xthumb => "100x100>" }, :default_url => "/images/:style/missing.png"
    validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/
  end
end