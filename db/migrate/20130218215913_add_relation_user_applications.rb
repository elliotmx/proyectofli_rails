class AddRelationUserApplications < ActiveRecord::Migration
  def change
  		drop_table :users_applications

  		create_table :applications_users, :id => false do |t|
  			t.integer :user_id
  			t.integer :application_id
  		end
  end
end
