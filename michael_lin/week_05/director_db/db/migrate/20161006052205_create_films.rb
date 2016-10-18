class CreateFilms < ActiveRecord::Migration
  def change
    create_table :films do |t|
      t.text :title
      t.integer :release_year
      t.text :genre
      t.text :poster
      t.text :plot
      t.integer :director_id
      t.timestamps

    end
  end
end
