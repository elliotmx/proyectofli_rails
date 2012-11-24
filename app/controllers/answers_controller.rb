class AnswersController < ApplicationController

def index
	@answers = Answer.all
end

# GET /answers/new
# GET /answers/new.json
  def new
   # @answer = Answer.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @comment }
    end
  end

def show
end

def create
    #@comment = Answer.new(params[:comment])
    #puts params.inspect
    params.each do |i,v|
      #if i!="utf8" || i!="authencity_token"
      if (i != "utf8") && (i != "authenticity_token") &&  (i != "commit") && (i != "action") && (i != "controller")
        puts "parametro #{i} texto: #{v} entero"

        @comment = Answer.find_or_create_by_question_id(:question_id => i.to_i, :value => v,:application_id => current_user.applications.first.id )
        if @comment.new_record?
          puts "es nuevo record => #{@comment}" 
          @comment.save
        else
          @comment.update_attributes(:value => v)
        end
      end
    	#@comment = Answer.new(:question_id => v[0], :value => v[1], :application_id => current_user.applications.first.id)	
    end

    respond_to do |format|
      if @comment.save
        format.html { redirect_to @comment, notice: 'Comment was successfully created.' }
        format.json { render json: @comment, status: :created, location: @comment }
      else
        format.html { render action: "new" }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end


end
