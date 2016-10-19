class CreatePaintings < ActiveRecord::Migration
  def change
    create_table :paintings do |t|
      t.text :title
      t.text :image
      t.text :style
      t.text :intended_use
      t.timestamps
    end
  end
end
