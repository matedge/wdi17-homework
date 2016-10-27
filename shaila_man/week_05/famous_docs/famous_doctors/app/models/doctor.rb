# == Schema Information
#
# Table name: doctors
#
#  id          :integer          not null, primary key
#  name        :text
#  description :text
#  dob         :date
#  country     :text
#  image       :text
#  created_at  :datetime
#  updated_at  :datetime
#

class Doctor < ActiveRecord::Base
  
end
