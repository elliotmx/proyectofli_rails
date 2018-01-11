class AddColumnToInvitedUsers < ActiveRecord::Migration
  def change
  	add_column	:invited_users, :user_id, :integer
  	remove_column :invited_users, :id_college
  end
end
