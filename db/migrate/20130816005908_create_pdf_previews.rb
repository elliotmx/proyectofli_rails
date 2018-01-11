class CreatePdfPreviews < ActiveRecord::Migration
  def change
    create_table :pdf_previews do |t|
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
