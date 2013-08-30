class AddColumnsToPdfPreview < ActiveRecord::Migration
  def change
  	remove_column :pdf_previews, :name
  	remove_column :pdf_previews, :description
  	add_column :pdf_previews, :project_title, :string
  	add_column :pdf_previews, :problem, :text
  	add_column :pdf_previews, :justification, :text
  	add_column :pdf_previews, :objective, :text
  	add_column :pdf_previews, :objective_population, :string
  	add_column :pdf_previews, :components, :text
  	add_column :pdf_previews, :activities, :text
  	add_column :pdf_previews, :implementation, :text
  	add_column :pdf_previews, :cronogram, :text
  	add_column :pdf_previews, :budget, :string
  	add_column :pdf_previews, :risks, :text
  end
end
