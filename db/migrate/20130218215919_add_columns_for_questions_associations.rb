class AddColumnsForQuestionsAssociations < ActiveRecord::Migration
  def change
  	add_column :questions,:section_id, :integer
  	add_column :answers, :question_id, :integer
  	add_column :answers, :application_id, :integer
  end
end
