class AddColumnToQuestions < ActiveRecord::Migration
  def change
  	add_column :questions, :extra_text_desc , :string
  end
end
