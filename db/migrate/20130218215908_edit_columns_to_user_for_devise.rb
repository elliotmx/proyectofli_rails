class EditColumnsToUserForDevise < ActiveRecord::Migration
  def change
  	remove_column :users, :password_salt
  	add_column :users , :password, :string
  end
end
