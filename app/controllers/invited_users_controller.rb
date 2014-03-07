class InvitedUsersController < ApplicationController
  # GET /invited_users
  # GET /invited_users.json
   before_filter :authenticate_user!
  def index
    @invited_users = InvitedUser.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @invited_users }
    end
  end

  # GET /invited_users/1
  # GET /invited_users/1.json
  def show
    @invited_user = InvitedUser.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @invited_user }
    end
  end

  # GET /invited_users/new
  # GET /invited_users/new.json
  def new
    @invited_user = InvitedUser.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @invited_user }
    end
  end

  # GET /invited_users/1/edit
  def edit
    @invited_user = InvitedUser.find(params[:id])
  end

  # POST /invited_users
  # POST /invited_users.json
  def create
    @invited_user = InvitedUser.new(params[:invited_user])

    respond_to do |format|
      if @invited_user.save
        format.html { redirect_to action: "index", notice: 'Usuario creado correctamente' }
        format.json { render json: @invited_user, status: :created, location: @invited_user }
      else
        format.html { redirect_to action: "index",notice: 'El usuario ya fue registrado' }
        format.json { render json: @invited_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /invited_users/1
  # PUT /invited_users/1.json
  def update
    @invited_user = InvitedUser.find(params[:id])

    respond_to do |format|
      if @invited_user.update_attributes(params[:invited_user])
        format.html {  redirect_to action: "index", notice: 'Invited user was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @invited_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /invited_users/1
  # DELETE /invited_users/1.json
  def destroy
    @invited_user = InvitedUser.find(params[:id])
    @invited_user.destroy

    respond_to do |format|
      format.html { redirect_to invited_users_url }
      format.json { head :no_content }
    end
  end
end
