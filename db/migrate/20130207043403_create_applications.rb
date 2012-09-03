class CreateApplications < ActiveRecord::Migration
  def change
    create_table :applications do |t|
      t.string :name
      t.string :short_description
      t.integer :iduser
      t.string :video_url

      t.timestamps
    end
  end
end
