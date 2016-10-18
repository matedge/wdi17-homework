# == Schema Information
#
# Table name: films
#
#  id           :integer          not null, primary key
#  title        :text
#  release_year :integer
#  genre        :text
#  poster       :text
#  plot         :text
#  director_id  :integer
#  created_at   :datetime
#  updated_at   :datetime
#

class Film < ActiveRecord::Base
  belongs_to :director
end
