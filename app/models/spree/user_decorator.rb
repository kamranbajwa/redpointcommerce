Spree::User.class_eval do
  belongs_to :user_group
  has_many :account_transactions
  devise :timeoutable
has_paper_trail :ignore => [:created_at, :updated_at,:last_sign_in_ip,:last_sign_in_at,:current_sign_at,:sign_in_count],on: [:update]
   def timeout_in
    return Spree::Organization.first.try(:session_time_out).try(:hours) || 24.hours
  end


end 