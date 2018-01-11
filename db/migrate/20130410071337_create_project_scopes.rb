class CreateProjectScopes < ActiveRecord::Migration
  def change
    create_table :project_scopes do |t|
      t.string :description
      t.timestamps
    end
  end
end
