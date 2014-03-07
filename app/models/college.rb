class College < ActiveRecord::Base
	has_many :invited_users
end