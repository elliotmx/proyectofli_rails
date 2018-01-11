class CreateDevelopmentStages < ActiveRecord::Migration
  def change
    create_table :development_stages do |t|
      t.string :description
      t.timestamps
    end
  end
end