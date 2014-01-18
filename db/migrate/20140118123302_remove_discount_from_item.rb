class RemoveDiscountFromItem < ActiveRecord::Migration
  def self.up
  	remove_column :items, :discount
  	remove_column :items, :quantity
  end

  def self.down
  	
  end
end
