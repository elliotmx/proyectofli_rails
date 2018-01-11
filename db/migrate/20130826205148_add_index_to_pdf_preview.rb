class AddIndexToPdfPreview < ActiveRecord::Migration
  def change
  	add_index :pdf_previews, :application_id
  end
end
