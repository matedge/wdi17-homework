Director.destroy_all
Director.create(:name => "Steven Spielberg", :dob => '1946/12/18', :nationality => "American", :image => "https://upload.wikimedia.org/wikipedia/commons/2/29/Steven_Spielberg_Masterclass_Cin%C3%A9math%C3%A8que_Fran%C3%A7aise_2_cropped.jpg")
Director.create(:name => "Kathryn Bigelow", :dob => '1951/11/27', :nationality => "American", :image => "https://upload.wikimedia.org/wikipedia/commons/c/cb/82nd_Academy_Awards%2C_Kathryn_Bigelow_-_army_mil-66453-2010-03-09-180354.jpg")

Film.destroy_all
Film.create(:title => "Raiders of the Lost Ark", :release_year => 1981, :genre => "Action Adventure", :poster => "https://upload.wikimedia.org/wikipedia/en/4/4c/Raiders_of_the_Lost_Ark.jpg", :plot => "Harrison Ford fights some Nazis.")
Film.create(:title => "Point Break", :release_year => 1991, :genre => "Action Crime Thriller", :poster => "https://upload.wikimedia.org/wikipedia/en/7/7e/Pointbreaktheatrical.jpg", :plot => "Keanu Reeves infiltrates a sky diving ring, and wastes some bullets.")
