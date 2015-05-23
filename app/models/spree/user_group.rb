module Spree
  class UserGroup < Spree::Base
    has_many :users
  end
end
