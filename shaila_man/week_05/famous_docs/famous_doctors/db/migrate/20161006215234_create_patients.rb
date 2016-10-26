class CreatePatients < ActiveRecord::Migration
  def change
    create_table :patients do |t|
      t.text :name
      t.date :date_died
      t.text :details_of_death
      t.text :country
      t.text :photo
      t.timestamps
    end
  end
end
