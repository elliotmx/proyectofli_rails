class ApplicationsController < ApplicationController
  #before_filter :authenticate_user!, :except => [:show, :user]
  before_filter :authenticate_user!, :except => [:list,:show]
  # GET /applications
  # GET /applications.json
  def index
    @applications = current_user.applications.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @applications }
    end
  end

  def list
    @applications = Application.all

  end

  # GET /applications/1
  # GET /applications/1.json
  def show
    #puts " parametros para show application #{params[:id]} "}
    if (current_user.role.name == "Admin")
      @application = Application.find(params[:id])
    else
      @application = Application.find(current_user.applications.first)
    end

     @pdf_preview = PdfPreview.find_by_application_id(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @application }
      format.pdf {
        pdf = ApplicationPdf.new(@pdf_preview, view_context)
        send_data pdf.render, filename: 
        "answers.pdf",
        type: "application/pdf",
        disposition: "inline"
      }
    end
  end

  # GET /applications/new
  # GET /applications/new.json
  def new
    @application = Application.new
    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @application }
    end
  end

  # GET /applications/1/edit
  def edit
    @application = Application.find(params[:id])
  end

  # POST /applications
  # POST /applications.json
  def create
    #@application = Application.new(params[:application])

    @application = current_user.applications.create(params[:application])
    respond_to do |format|
      if @application.save
        format.html { redirect_to @application, notice: '' }
        format.json { render json: @application, status: :created, location: @application }
      else
        format.html { render action: "new" }
        format.json { render json: @application.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /applications/1
  # PUT /applications/1.json
  def update
    @application = Application.find(params[:id])

    respond_to do |format|
      if @application.update_attributes(params[:application])
        format.html { redirect_to @application, notice: '' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @application.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /applications/1
  # DELETE /applications/1.json
  def destroy
    @application = Application.find(params[:id])
    
    @application.destroy
    @application.answers.destroy_all


    respond_to do |format|
      format.html { redirect_to applications_url }
      format.json { head :no_content }
    end
  end
end
