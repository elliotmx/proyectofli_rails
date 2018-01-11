class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.integer :age
      t.string :address
      t.string :email
      t.integer :semester
      t.string :phone
      t.string :extra_phone
      t.string :twitter
      t.string :linkedin
      t.string :photo
      t.integer :motivation
      t.integer :faculty_id
      t.integer :application_id
      t.integer :user_profile_id
      
      t.timestamps
    end
  end
end
