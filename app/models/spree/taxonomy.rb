module Spree
  class Taxonomy < Spree::Base
    acts_as_list

    validates :name, presence: true

    has_many :taxons, inverse_of: :taxonomy
    has_one :root, -> { where parent_id: nil }, class_name: "Spree::Taxon", dependent: :destroy

    after_create :set_root
    after_save :set_root_taxon_name

    default_scope { order("#{self.table_name}.position, #{self.table_name}.created_at") }

    has_attached_file :cat_image, styles: {
     mini: '32x32>', normal: '128x128>' 

  }

  validates_attachment_content_type :cat_image, :content_type => ["image/jpg", "image/jpeg", "image/gif", "image/png"]
  validates_attachment_size :cat_image, :less_than => 1.megabytes, 
   :unless => Proc.new {|model| model.cat_image}

    private
      def set_root
        self.root ||= Taxon.create!(taxonomy_id: id, name: name)
      end

      def set_root_taxon_name
        root.update_attributes(name: name)
      end
  end
end
