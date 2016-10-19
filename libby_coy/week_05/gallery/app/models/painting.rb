# == Schema Information
#
# Table name: paintings
#
#  id           :integer          not null, primary key
#  title        :text
#  image        :text
#  style        :text
#  intended_use :text
#  created_at   :datetime
#  updated_at   :datetime
#  user_id      :integer
#

class Painting < ActiveRecord::Base
  belongs_to :user
end
