class User < ActiveRecord::Base
	belongs_to :user_profile
	belongs_to :faculty
  has_and_belongs_to_many :applications
	accepts_nested_attributes_for :user_profile

	has_attached_file :photo, 
    :styles  => {:small => "300X300>", :thumbnail => "80x80#"},
    :default_url => ActionController::Base.helpers.asset_path("missing_original.png")
  
	# Include default devise modules. Others available are:  
  	# :token_authenticatable, :lockable, :timeoutable and :activatable  
  	# :confirmable  
  devise :database_authenticatable, :registerable,   
         :recoverable, :rememberable, :trackable, :validatable  
  
  	# Setup accessible (or protected) attributes for your model  
    # :password_confirmation
  	attr_accessible :email, :password, :name, :application_id, 
    :age, :address, :semester, :phone, :extra_phone, :photo,
    :twitter, :linkedin, :faculty_id,:user_profile_id, :password_confirmation,
    :motivation, :create_from

    validates_uniqueness_of :email, :case_sensitive => false
    #validates_uniqueness_of    :email,     :case_sensitive => false, :allow_blank => true, :if => :email_changed?
    validates_format_of :email, :with  => Devise.email_regexp, :allow_blank => true, :if => :email_changed?
    validates_presence_of   :password, :on=>:create
    validates_confirmation_of  :password, :on=>:create
    validates_length_of :password, :within => Devise.password_length, :allow_blank => true
end