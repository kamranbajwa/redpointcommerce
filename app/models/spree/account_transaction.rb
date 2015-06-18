module Spree
class AccountTransaction < Spree::Base
	belongs_to :user
	before_create :random_number
	def random_number
		self.refrence_number = "ACC_TRANS_" + "#{1_000_000 + Random.rand(10_000_000 - 1_000_000)}"
	end
end
end
