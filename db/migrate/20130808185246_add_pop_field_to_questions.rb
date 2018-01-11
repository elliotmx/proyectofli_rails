class AddPopFieldToQuestions < ActiveRecord::Migration
  def change

  	add_column :questions, :pop_name, :string

  end
end
