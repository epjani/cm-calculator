class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.float :price
      t.integer :discount
      t.float :quantity

      t.timestamps
    end
  end
end
