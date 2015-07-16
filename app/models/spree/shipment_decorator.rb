Spree::Shipment.class_eval do
has_paper_trail :ignore => [:created_at, :updated_at]
end 