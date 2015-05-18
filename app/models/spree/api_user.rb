module Spree
  class ApiUser < Spree::Base
    validates :email, uniqueness: true
  	validates :email, :name, presence: true
  end
end