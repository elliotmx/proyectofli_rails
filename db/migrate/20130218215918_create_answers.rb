class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.string :value

      t.timestamps
    end
  end
end
