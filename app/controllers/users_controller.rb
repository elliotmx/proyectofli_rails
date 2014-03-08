class UsersController < ApplicationController
  respond_to :html ,:js
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
    @user = User.find(params[:id])

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
      @user = User.find(params[:id])
  end

  # POST /users
  # POST /users.json
  def create
    if params[:user][:create_from] = 'user_form'
      params[:user][:password] = "sinpass"
      params[:user].delete(:create_from)
    end
    @app = Application.find(current_user.applications.first.id)
    @user =  @app.users.create(params[:user])
    #logger.debug {@user.attributes.inspect}
    #@user = User.new(params[:user])
    respond_to do |format|
      if @user.save
        Mailer.send_mail("hola coordinador").deliver
        format.html { redirect_to @app, notice: 'User was successfully created.'  }
        format.json { render json: @user, status: :created, location: @user }
      else
        format.html { render action: "new" }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /users/1
  # PUT /users/1.json
  def update
    if params[:user][:password].blank?
      params[:user].delete(:password)
      params[:user].delete(:password_confirmation)
      params[:user].delete(:create_from)
    end
    @user = User.find(params[:id])

    respond_to do |format|
      if @user.update_attributes(params[:user])
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
    @user = User.find(params[:id])
    @user.destroy

    respond_to do |format|
      format.html { redirect_to users_url }
      format.json { head :no_content }
    end
  end
end
