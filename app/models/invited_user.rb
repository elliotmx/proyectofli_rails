class InvitedUser < ActiveRecord::Base

	validates :email, :uniqueness => true
	belongs_to :college
end
