# == Schema Information
#
# Table name: directors
#
#  id          :integer          not null, primary key
#  name        :text
#  dob         :date
#  nationality :text
#  image       :text
#  created_at  :datetime
#  updated_at  :datetime
#

class Director < ActiveRecord::Base
  has_many :films
end
