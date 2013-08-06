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
         :recoverable, :rememberable, :trackable, :validatable ,
          :omniauthable, :omniauth_providers => [:facebook] 
  
  	# Setup accessible (or protected) attributes for your model  
    # :password_confirmation
  	attr_accessible :email, :password, :name, :application_id, 
    :age, :address, :semester, :phone, :extra_phone, :photo,
    :twitter, :linkedin, :faculty_id,:user_profile_id, :password_confirmation,
    :motivation, :create_from, :provider, :uid

    validates_uniqueness_of :email, :case_sensitive => false
    #validates_uniqueness_of    :email,     :case_sensitive => false, :allow_blank => true, :if => :email_changed?
    validates_format_of :email, :with  => Devise.email_regexp, :allow_blank => true, :if => :email_changed?
    validates_presence_of   :password, :on=>:create
    validates_confirmation_of  :password, :on=>:create
    validates_length_of :password, :within => Devise.password_length, :allow_blank => true


  def self.find_for_facebook_oauth(auth, signed_in_resource=nil)
    user = User.where(:provider => auth.provider, :uid => auth.uid).first
    logger.info "provider : " + auth.provider + " " + " uid:" + auth.uid 
    logger.info "entra en metodo find_for_facebook_oauth"
    unless user
      logger.info "entra en metodo find_for_facebook_oauth unless user"

      user = User.new(name:auth.extra.raw_info.name,
                         provider:auth.provider,
                         uid:auth.uid,
                         email:auth.info.email,
                         password:Devise.friendly_token[0,20]
                         )

      #logger.info "Hola User" + user.inspect
    end
    user
  end


  def self.new_with_session(params, session)
    super.tap do |user|
      if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
        user.email    = data["email"]    if user.email.blank?
        user.name     = data["name"]     if user.name.blank?
        user.uid      = data["id"]       if user.uid.blank?
        user.provider = "facebook"
        
        #logger.info user.inspect
        logger.info "data inspect " + data.inspect
      end
    end
  end

end