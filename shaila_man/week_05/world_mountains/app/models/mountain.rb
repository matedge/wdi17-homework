# == Schema Information
#
# Table name: mountains
#
#  id      :integer          primary key
#  name    :text
#  image   :text
#  height  :float
#  country :text
#  range   :text
#

class Mountain < ActiveRecord::Base
end
