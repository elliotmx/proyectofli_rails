class ChangeBudgetPdfPreview < ActiveRecord::Migration
  def change
  	remove_column :pdf_previews, :budget
  	add_column :pdf_previews, :budget, :text
  end
end
