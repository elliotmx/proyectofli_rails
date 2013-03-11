class AddTagsColumnToApplication < ActiveRecord::Migration
  def change
  	add_column :applications, :tags , :string
  end
end
