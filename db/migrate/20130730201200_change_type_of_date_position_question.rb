class ChangeTypeOfDatePositionQuestion < ActiveRecord::Migration
  def change
  	#este desmadre se hizo ya que Postgree ( DB nativa de heroku), no permite hacer una migración de string a integer
  	#si necesitas hacer la migración en local es necesario usar otro codigo
    rename_column :questions, :position_question, :position_question_tmp
    add_column :questions, :position_question, :integer

    Question.reset_column_information
    Question.all.each { |question| question.update_attribute(:position_question, question.position_question_tmp.to_i) }
    remove_column :questions, :position_question_tmp
  end
end
