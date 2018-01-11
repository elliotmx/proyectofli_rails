class AddColumnsForHtmlBeforeQuestion < ActiveRecord::Migration
  def change
  	add_column :questions, :html_for_field, :string
  end
end
