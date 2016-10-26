class Create < ActiveRecord::Migration
  def change
    create_table :doctors do |t|
      t.text :name
      t.text :description
      t.date :dob
      t.text :country
      t.text :image
      t.timestamps
    end
  end
end
