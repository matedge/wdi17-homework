# == Schema Information
#
# Table name: mountains
#
#  id            :integer          primary key
#  name          :text
#  country       :text
#  height        :integer
#  mountain_type :text
#  image         :text
#  facts         :text
#

class Mountain < ActiveRecord::Base
end
