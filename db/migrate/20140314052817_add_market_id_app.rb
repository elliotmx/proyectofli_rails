class AddMarketIdApp < ActiveRecord::Migration
  def change
  	remove_column :applications, :market_id
  	add_column :applications, :market_id, :integer
  end
end
