class CreateColleges < ActiveRecord::Migration
  def change
    create_table :colleges do |t|
      t.string :name
      t.string :address
      t.string :telefono
      t.string :email

      t.timestamps
    end
  end
end
