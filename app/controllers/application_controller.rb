class ApplicationController < ActionController::Base
    protect_from_forgery

  #overrided method for redirect user after sign in
  def after_sign_in_path_for(user)
      
      adminjueces_path  #<- ruta para comenzar aplicaciones
      #invited_users_path
  end

  #method to handle the "Access Denied" exception.
  #def has_role?(current_user,role)
  #	return !!current_user.roles.find_by_name(role.to_s.camelize)
  #end


  rescue_from CanCan::AccessDenied do |exception|
  	redirect_to root_url, :alert =>exception.message
  end

end