
User.destroy_all
User.create :email => 'jonesy@gmail.com', :name => 'Jonesy', :password => 'chicken', :password_confirmation => 'chicken'
User.create :email => 'libby@gmail.com', :name => 'Libby', :password => 'chicken', :password_confirmation => 'chicken'
User.create :email => 'dan@gmail.com', :name => 'Daniel', :password => 'chicken', :password_confirmation => 'chicken'

Painting.destroy_all
Painting.create :title => 'The Flight of the Dragonfly in Front of the Sun', :image => 'http://41.media.tumblr.com/6b293aea7473596f536e145b957b2cd4/tumblr_mzrwc18h3b1qzu1hko1_1280.jpg', :style => 'Abstract Art', :intended_use => 'Desktop Wallpaper'
Painting.create :title => 'They are staring at the sky', :image => 'http://41.media.tumblr.com/6b293aea7473596f536e145b957b2cd4/tumblr_mzrwc18h3b1qzu1hko1_1280.jpg', :style => 'Modern Art', :intended_use => 'Email gift'
Painting.create :title => 'Drip Painting', :image => 'http://41.media.tumblr.com/6b293aea7473596f536e145b957b2cd4/tumblr_mzrwc18h3b1qzu1hko1_1280.jpg', :style => 'Process Art', :intended_use => 'Wall hanging'
