# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Author.destroy_all
Book.destroy_all

Author.create :name => 'Charles Dickens', :nationality => 'British', :genre => 'Historical Fiction'
Author.create :name => 'Elizabeth Dickens', :nationality => 'British', :genre => 'Historical Fiction'
Author.create :name => 'Joy Love', :nationality => 'American', :genre => 'Fiction'
Author.create :name => 'Eckhart Tolle', :nationality => 'American', :genre => 'New Age'

Book.create :name => 'xoxo', :genre => 'Fiction'
Book.create :name => 'To Change', :genre => 'New Age'
