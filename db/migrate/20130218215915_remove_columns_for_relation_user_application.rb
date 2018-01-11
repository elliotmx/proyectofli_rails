class RemoveColumnsForRelationUserApplication < ActiveRecord::Migration
  def change
  	remove_column :applications,:user_id
  	remove_column :users, :application_id
  end
end
