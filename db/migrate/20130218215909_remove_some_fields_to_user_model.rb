class RemoveSomeFieldsToUserModel < ActiveRecord::Migration
  def change
  	#remove_column :users, :users_catalog_id
  	add_column :users, :remember_created_at, :datetime
  end
end
