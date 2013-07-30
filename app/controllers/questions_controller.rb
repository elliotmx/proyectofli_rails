class QuestionsController < ApplicationController
  # GET /questions
  # GET /questions.json
  def index
    @questions = Question.order(:section_id, :position_question).all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @questions }
      format.pdf{
        pdf = QuestionsPdf.new(@questions, view_context)
        send_data pdf.render, filename: 
        "questions",
        type: "application/pdf",
        disposition: "inline"
      }
    end
  end

  # GET /questions/1
  # GET /questions/1.json
  def show
    @question = Question.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @question }

      format.pdf {
        pdf = QuestionPdf.new(@question, view_context)
        send_data pdf.render, filename: 
        "invoice_#{@question.created_at.strftime("%d/%m/%Y")}.pdf",
        type: "application/pdf",
        disposition: "inline"
}

    end
  end
  

  # GET /questions/new
  # GET /questions/new.json
  def new
    @question = Question.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @question }
    end
  end

  # GET /questions/1/edit
  def edit
    @question = Question.find(params[:id])
  end

  # POST /questions
  # POST /questions.json
  def create
    @question = Question.new(params[:question])
    @questions = Question.all
    respond_to do |format|
      if @question.save
        format.html { redirect_to action: "index", notice: 'Question was successfully created.' }
        format.json { render json: Question.all, status: :created, location: Question.all }
      else
        format.html { render action: "new" }
        format.json { render json: @question.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /questions/1
  # PUT /questions/1.json
  def update
    @question = Question.find(params[:id])

    respond_to do |format|
      if @question.update_attributes(params[:question])
        format.html { redirect_to @question, notice: 'Question was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @question.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /questions/1
  # DELETE /questions/1.json
  def destroy
    @question = Question.find(params[:id])
    @question.destroy

    @answer = Answer.where("question_id = ?", params[:id])

    respond_to do |format|
      format.html { redirect_to questions_url }
      format.json { head :no_content }
    end
  end
end
