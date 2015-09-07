module Spree
class RecurringOrder < Spree::Base
before_validation :generate_order_numbers, on: :create
belongs_to :variant, class_name: 'Spree::Variant'
belongs_to :bill_address, foreign_key: :bill_address_id, class_name: 'Spree::Address'
belongs_to :ship_address, foreign_key: :ship_address_id, class_name: 'Spree::Address'
belongs_to :user, class_name: 'Spree::User'
def generate_order_numbers(options = {})
	options[:length]  ||= 9
      options[:letters] ||= false
      options[:prefix]  ||= 'ROC'

      possible = (0..9).to_a
      possible += ('A'..'Z').to_a if options[:letters]

      self.number ||= loop do
        # Make a random number.
        random = "#{options[:prefix]}#{(0...options[:length]).map { possible.shuffle.first }.join}"
        # Use the random  number if no other order exists with it.
        if self.class.exists?(number: random)
          # If over half of all possible options are taken add another digit.
          options[:length] += 1 if self.class.count > (10 ** options[:length] / 2)
        else
          break random
        end
      end
		end
end
end
