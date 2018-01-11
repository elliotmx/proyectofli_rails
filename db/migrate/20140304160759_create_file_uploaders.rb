class CreateFileUploaders < ActiveRecord::Migration
  def change
    create_table :file_uploaders do |t|
      t.string :name
      t.text :url
      t.text :description

      t.timestamps
    end
  end
end
