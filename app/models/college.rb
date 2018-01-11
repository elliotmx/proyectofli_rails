class College < ActiveRecord::Base
	has_many :invited_users
	has_many :users
end