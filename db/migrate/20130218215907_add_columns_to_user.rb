class AddColumnsToUser < ActiveRecord::Migration
  def change


  	add_column :users, :encrypted_password, :string, :null => false, :default => ""

	
  	## Recoverable
 	add_column :users, :reset_password_token, :string
	add_column :users, :reset_password_sent_at, :datetime

  	## Rememberable
  	#t.datetime :remember_created_at

	 ## Trackable
	add_column :users, :sign_in_count, :integer,:default => 0
	add_column :users, :current_sign_in_at, :datetime
	add_column :users, :last_sign_in_at, :datetime
	add_column :users, :current_sign_in_ip, :string
	add_column :users, :last_sign_in_ip, :string

  	 ## Encryptable
  	add_column :users, :password_salt, :string

	  ## Confirmable
	  # t.string   :confirmation_token
	  # t.datetime :confirmed_at
	  # t.datetime :confirmation_sent_at
	  # t.string   :unconfirmed_email # Only if using reconfirmable

	  ## Lockable
	  # t.integer  :failed_attempts, :default => 0 # Only if lock strategy is :failed_attempts
	  # t.string   :unlock_token # Only if unlock strategy is :email or :both
	  # t.datetime :locked_at

	  # Token authenticatable
	  add_column :users, :authentication_token, :string

	  ## Invitable
	  add_column :users, :invitation_token, :string

	  add_index :users, :email,                :unique => true
    	# add_index :users, :confirmation_token,   :unique => true
      add_index :users, :reset_password_token, :unique => true
    	# add_index :users, :unlock_token,         :unique => true
  end
end
