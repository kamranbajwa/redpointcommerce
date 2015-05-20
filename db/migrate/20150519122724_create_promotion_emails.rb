class CreatePromotionEmails < ActiveRecord::Migration
  def change
    create_table :spree_promotion_emails do |t|
    	t.string :title
    	t.text  :body
      t.timestamps
    end
  end
end
