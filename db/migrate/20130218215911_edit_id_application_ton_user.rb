class EditIdApplicationTonUser < ActiveRecord::Migration
  def change
  	#add_column :applications: , 
  	remove_column :users, :application_id
  end
end
