class CreateSections < ActiveRecord::Migration
  def change
    create_table :sections do |t|
      t.string :description

      t.timestamps
    end
  end
end
