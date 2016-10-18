# == Schema Information
#
# Table name: mountains
#
#  id           :integer          primary key
#  name         :text
#  location     :text
#  height       :float
#  first_ascent :integer
#  image        :text
#

class Mountain < ActiveRecord::Base
end
