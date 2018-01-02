class UsersController < ApplicationController
  respond_to :html ,:js
  before_filter :authenticate_user!
  # GET /users
  # GET /users.json
  def index
    @users = User.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @users }
    end
  end

  # GET /users/1
  # GET /users/1.json
  def show
    @user = User.find(user_params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @user }
    end
  end

  # GET /users/new
  # GET /users/new.json
  def new

    @user = User.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @user }
    end
  end

  # GET /users/1/edit
  def edit
    #if params[:user][:password].blank?
      #params[:user].delete(:password)
      #params[:user].delete(:password_confirmation)
    #end
      @user = User.find(user_params[:id])
  end

  # POST /users
  # POST /users.json
  def create
    if user_params[:create_from] = 'user_form'
      user_params[:password] = "sinpass"
      user_params.delete(:create_from)
    end
    @app = Application.find(current_user.applications.first.id)
    @user =  @app.users.create(user_params[:user])
    #logger.debug {@user.attributes.inspect}
    #@user = User.new(params[:user])
    respond_to do |format|
      if @user.save
        #Mailer.send_mail(Message.new).deliver
        #Mailer.send_email(Message.new).deliver
        format.html { redirect_to @app, notice: ''  }
        format.json { render json: @user, status: :created, location: @user }
      else
        format.html { redirect_to @app ,alert: "No se pudo agregar, revisa que ingreses los datos correctos"}
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end

    end
  end

  # PUT /users/1
  # PUT /users/1.json
  def update
    if user_params[:password].blank?
      user_params.delete(:password)
      user_params.delete(:password_confirmation)
      user_params.delete(:create_from)
    end
    @user = User.find(user_params[:id])

    respond_to do |format|
      if @user.update_attributes(user_params[:user])
        format.html { redirect_to current_user.applications.first, notice: 'Usuario Actualizado' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user = User.find(user_params[:id])
    @user.destroy

    respond_to do |format|
      format.html { redirect_to users_url }
      format.json { head :no_content }
    end
  end

  private

  def user_params
      params.require(:user).permit(:email, :password, :name, :application_id, :age, :address, :semester, :phone, :extra_phone, :photo, :twitter, :linkedin, :faculty_id,:user_profile_id, :password_confirmation, :motivation, :create_from, :provider, :uid, :role_id,:college_id)
  end

end
