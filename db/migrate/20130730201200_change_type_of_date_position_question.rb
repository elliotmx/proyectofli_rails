class ChangeTypeOfDatePositionQuestion < ActiveRecord::Migration
  def change
  	change_column :questions, :position_question, :integer
  end
end
