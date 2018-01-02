class ApplicationController < ActionController::Base
  protect_from_forgery
  before_action :configure_permitted_parameters, if: :devise_controller?

  #overrided method for redirect user after sign in
  def after_sign_in_path_for(user)
      #adminjueces_path  #<- ruta para comenzar aplicaciones
      #invited_users_path
      applications_path
  end

  #method to handle the "Access Denied" exception.
  def has_role?(current_user,role)
  	return !!current_user.name
  end


  rescue_from CanCan::AccessDenied do |exception|
  	redirect_to root_url, :alert =>exception.message
  end

  protected

  def configure_permitted_parameters
  devise_parameter_sanitizer.permit(:sign_up) do |user_params|
    user_params.permit(:email, :password, :name, :application_id, :age, :address, :semester, :phone, :extra_phone, :photo, :twitter, :linkedin, :faculty_id,:user_profile_id, :password_confirmation, :motivation, :create_from, :provider, :uid, :role_id,:college_id)
  end
  end

end
