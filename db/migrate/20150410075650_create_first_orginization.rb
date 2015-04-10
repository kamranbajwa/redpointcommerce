class CreateFirstOrginization < ActiveRecord::Migration
  def change
    Spree::Organization.create(:company_name=>"R-P-C")
    end
end
