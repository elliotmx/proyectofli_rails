class AddIndexToAnswerModel < ActiveRecord::Migration
  def change
  		add_index :answers, :id, :unique => true
  end
end
