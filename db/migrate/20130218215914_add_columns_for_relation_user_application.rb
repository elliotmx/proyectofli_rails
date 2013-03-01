class AddColumnsForRelationUserApplication < ActiveRecord::Migration
  def change
  	remove_column :applications, :iduser
  	add_column :applications,:user_id, :integer
  	add_column :users, :application_id, :integer
  end
end
