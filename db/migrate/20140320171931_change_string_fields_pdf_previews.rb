class ChangeStringFieldsPdfPreviews < ActiveRecord::Migration
  def change
  	remove_column :pdf_previews, :project_title
  	remove_column :pdf_previews, :objective_population
  	add_column :pdf_previews, :project_title, :text
  	add_column :pdf_previews, :objective_population, :text
  end
end
