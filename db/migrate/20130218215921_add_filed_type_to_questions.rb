class AddFiledTypeToQuestions < ActiveRecord::Migration
  def change
  	add_column :questions, :field_type , :string
  end
end
