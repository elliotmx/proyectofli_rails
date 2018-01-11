class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :spa_description
      t.string :eng_description
      t.boolean :active

      t.timestamps
    end
  end
end
