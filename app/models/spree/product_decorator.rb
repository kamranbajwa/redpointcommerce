Spree::Product.class_eval do
#import csv
def self.import(file)  
  CSV.foreach(file.path, headers: true) do |row|  
   Prodcut.create! row.to_hash  
  end  
end   

end 