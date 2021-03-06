class PdfPreviewsController < ApplicationController
  # GET /pdf_previews
  # GET /pdf_previews.json
  respond_to :html ,:js

  def index
    @pdf_previews = PdfPreview.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @pdf_previews }
    end
  end

  # GET /pdf_previews/1
  # GET /pdf_previews/1.json
  def show
    @pdf_preview = PdfPreview.find_by_application_id(params[:id])

   respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @pdf_preview }
      format.pdf {
        pdf = ApplicationPdf.new(@pdf_preview, view_context)
        send_data pdf.render, filename: 
        "answers.pdf",
        type: "application/pdf",
        disposition: "inline"
      }
    end
  end

  # GET /pdf_previews/new
  # GET /pdf_previews/new.json
  def new
    @pdf_preview = PdfPreview.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @pdf_preview }
    end
  end

  # GET /pdf_previews/1/edit
  def edit
    @pdf_preview = PdfPreview.find_by_application_id(current_user.applications.last.id)
  end

  # POST /pdf_previews
  # POST /pdf_previews.json
  def create
    @pdf_preview = PdfPreview.new(params[:pdf_preview].merge(:application_id => current_user.applications.first.id))
    @pdf_preview.save
    # respond_to do |format|
    #   if @pdf_preview.save
    #     format.html { redirect_to @pdf_preview, notice: 'Pdf preview was successfully created.' }
    #     format.json { render json: @pdf_preview, status: :created, location: @pdf_preview }
    #   else
    #     format.html { render action: "new" }
    #     format.json { render json: @pdf_preview.errors, status: :unprocessable_entity }
    #   end
    # end
    respond_with( current_user.applications.first , :layout => !request.xhr?)
  end

  # PUT /pdf_previews/1
  # PUT /pdf_previews/1.json
  def update
    @pdf_preview = PdfPreview.find_last_by_application_id(current_user.applications.first.id)
    @pdf_preview.update_attributes(params[:pdf_preview])
    # respond_to do |format|
    #   if @pdf_preview.update_attributes(params[:pdf_preview])
    #     format.html { redirect_to @pdf_preview, notice: 'Pdf preview was successfully updated.' }
    #     format.json { head :no_content }
    #   else
    #     format.html { render action: "edit" }
    #     format.json { render json: @pdf_preview.errors, status: :unprocessable_entity }
    #   end
    # end
    respond_with( current_user.applications.first , :layout => !request.xhr?)
  end

  # DELETE /pdf_previews/1
  # DELETE /pdf_previews/1.json
  def destroy
    @pdf_preview = PdfPreview.find(params[:id])
    @pdf_preview.destroy

    respond_to do |format|
      format.html { redirect_to pdf_previews_url }
      format.json { head :no_content }
    end
  end
end
