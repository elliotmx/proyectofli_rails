class CreateInvitedUsers < ActiveRecord::Migration
  def change
    create_table :invited_users do |t|
      t.string :name
      t.string :id_college

      t.timestamps
    end
  end
end
