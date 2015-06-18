class CreateSubcriptionTransctions < ActiveRecord::Migration
  def change
    create_table :subcription_transctions do |t|

      t.timestamps
    end
  end
end
