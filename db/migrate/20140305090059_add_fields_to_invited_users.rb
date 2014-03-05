class AddFieldsToInvitedUsers < ActiveRecord::Migration
  def change
  	add_column 		:invited_users, :email, :string
  	remove_column 	:users,:faculty_id
  	add_column		:users, :college_id, :integer
  end
end
