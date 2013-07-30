class ChangeTypeOfDatePositionQuestion < ActiveRecord::Migration
  def change
    rename_column :questions, :position_question, :position_question_tmp
    add_column :questions, :position_question, :integer

    Question.reset_column_information
    Question.find(:all).each { |question| question.update_attribute(:position_question, question.position_question_tmp.to_i) }
    remove_column :questions, :position_question_tmp
  end
end
