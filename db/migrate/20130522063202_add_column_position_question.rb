class AddColumnPositionQuestion < ActiveRecord::Migration
  def change
  	add_column :questions, :position_question, :string
  end
end
