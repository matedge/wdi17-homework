# == Schema Information
#
# Table name: books
#
#  id         :integer          not null, primary key
#  name       :text
#  genre      :text
#  image      :text
#  owner_id   :integer
#  created_at :datetime
#  updated_at :datetime
#

class Book < ActiveRecord::Base
  belongs_to :author
end
