class AddCategoryIdToApp < ActiveRecord::Migration
  def change
  	add_column :applications, :category_id, :integer
  end
end
