class ApplicationController < ActionController::Base
    protect_from_forgery


    
  #overrided method for redirect user after sign in
  def after_sign_in_path_for(user)
      #current_user_path
      applications_path
  end
end