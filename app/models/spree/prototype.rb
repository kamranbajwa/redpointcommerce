module Spree
  class Prototype < Spree::Base
    has_and_belongs_to_many :properties, join_table: :spree_properties_prototypes
    has_and_belongs_to_many :option_types, join_table: :spree_option_types_prototypes
    has_and_belongs_to_many :taxons, join_table: :spree_taxons_prototypes
    belongs_to :tax_category, class_name: "Spree::TaxCategory"

    validates :name, presence: true
  end
end
