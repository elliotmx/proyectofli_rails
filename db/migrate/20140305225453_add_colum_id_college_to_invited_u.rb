class AddColumIdCollegeToInvitedU < ActiveRecord::Migration
  def change

  	add_column :invited_users, :college_id, :integer
  end
end
