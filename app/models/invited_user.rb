class InvitedUser < ActiveRecord::Base

	validates :email, :uniqueness => true
end
