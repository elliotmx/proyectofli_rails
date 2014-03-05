class FileUploadersController < ApplicationController
  # GET /file_uploaders
  # GET /file_uploaders.json
  def index
    @file_uploaders = FileUploader.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @file_uploaders }
    end
  end

  # GET /file_uploaders/1
  # GET /file_uploaders/1.json
  def show
    @file_uploader = FileUploader.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @file_uploader }
    end
  end

  # GET /file_uploaders/new
  # GET /file_uploaders/new.json
  def new
    @file_uploader = FileUploader.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @file_uploader }
    end
  end

  # GET /file_uploaders/1/edit
  def edit
    @file_uploader = FileUploader.find(params[:id])
  end

  # POST /file_uploaders
  # POST /file_uploaders.json
  def create
    @file_uploader = FileUploader.new(params[:file_uploader])

    respond_to do |format|
      if @file_uploader.save
        format.html { redirect_to @file_uploader, notice: 'File uploader was successfully created.' }
        format.json { render json: @file_uploader, status: :created, location: @file_uploader }
      else
        format.html { render action: "new" }
        format.json { render json: @file_uploader.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /file_uploaders/1
  # PUT /file_uploaders/1.json
  def update
    @file_uploader = FileUploader.find(params[:id])

    respond_to do |format|
      if @file_uploader.update_attributes(params[:file_uploader])
        format.html { redirect_to @file_uploader, notice: 'File uploader was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @file_uploader.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /file_uploaders/1
  # DELETE /file_uploaders/1.json
  def destroy
    @file_uploader = FileUploader.find(params[:id])
    @file_uploader.destroy

    respond_to do |format|
      format.html { redirect_to file_uploaders_url }
      format.json { head :no_content }
    end
  end
end
