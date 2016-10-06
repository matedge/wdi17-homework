class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.text :name
      t.text :genre
      t.text :image
      t.integer :owner_id
      t.timestamps
    end
  end
end
