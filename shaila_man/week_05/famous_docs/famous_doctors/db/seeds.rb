Doctor.destroy_all
Doctor.create(:name => 'Dr. Josef Mengele', :description => 'Spanish', :dob => '1893/04/20', :country => '20th century', :image => 'http://upload.wikimedia.org/wikipedia/commons/5/5c/Portrait_of_Joan_Miro%2C_Barcelona_1935_June_13.jpg')

Patient.destroy_all
Patient.create(:name => 'The Flight of the Dragonfly in Front of the Sun', :date_died => '1968', :details_of_death => 'oil on canvas', :country => 'Abstract Art', :photo => 'http://41.media.tumblr.com/6b293aea7473596f536e145b957b2cd4/tumblr_mzrwc18h3b1qzu1hko1_1280.jpg')

# doc
# t.text :name
# t.text :description
# t.date :dob
# t.text :country
# t.text :image
#
# pat
# t.text :name
# t.date :date_died
# t.text :details_of_death
# t.text :country
# t.text :photo
