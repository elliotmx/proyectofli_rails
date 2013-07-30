class ChangeTypeOfDatePositionQuestion < ActiveRecord::Migration
  def change
    rename_column :questions, :position_question, :position_question_tmp
    add_column :questions, :position_question, :integer

    Question.reset_column_information
    Question.find(:all).each { |question| question.update_attribute(:position_question, contact.position_question_tmp) }
    remove_column :questions, :position_question_tmp
  end
end
