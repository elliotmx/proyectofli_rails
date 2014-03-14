class AddFieldMarketIdToApp < ActiveRecord::Migration
  def change
  	add_column :applications, :market_id, :integer
  	remove_column :applications, :category_id
  end
end
