class CreateSpreeBlogs < ActiveRecord::Migration
  def change
    create_table :spree_blogs do |t|
     t.column  :title, :string
      t.column  :body, :text
      t.column  :permalink, :string
      t.column  :visible, :boolean, :default => false
      t.column  :published_at, :datetime
      t.column  :summary, :text
      t.column  :author, :string
      t.column  :author_id, :integer
      t.timestamps
    end
  end
end
