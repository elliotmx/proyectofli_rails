class User < ActiveRecord::Base
	belongs_to :user_profile
	belongs_to :faculty
	accepts_nested_attributes_for :user_profile

	has_attached_file :photo

	# Include default devise modules. Others available are:  
  	# :token_authenticatable, :lockable, :timeoutable and :activatable  
  	# :confirmable  
  devise :database_authenticatable, :registerable,   
         :recoverable, :rememberable, :trackable, :validatable  
  
  	# Setup accessible (or protected) attributes for your model  
    # :password_confirmation
  	attr_accessible :email, :password, :name, :application_id, 
    :age, :address, :semester, :phone, :extra_phone, :photo,
    :twitter, :linkedin, :faculty_id,:user_profile_id, :password_confirmation

    validates_uniqueness_of :email, :case_sensitive => false
end
