class AddApplicationIdToPdfPreview < ActiveRecord::Migration
  def change
    add_column :pdf_previews, :application_id, :integer
  end
end
