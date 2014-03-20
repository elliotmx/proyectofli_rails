class AddAttachmentDiagramToPdfpreviews < ActiveRecord::Migration
  def change
    add_column :pdf_previews, :document_file_name, :string
    add_column :pdf_previews, :document_content_type, :string
    add_column :pdf_previews, :document_file_size, :integer
    add_column :pdf_previews, :document_updated_at, :datetime
  end
end
