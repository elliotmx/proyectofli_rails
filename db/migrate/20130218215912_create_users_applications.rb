class CreateUsersApplications < ActiveRecord::Migration
  def change
    create_table :users_applications do |t|
      t.integer :user_id
      t.integer :application_id

      t.timestamps
    end
  end
end
