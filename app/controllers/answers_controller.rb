class AnswersController < ApplicationController

  def update_all
	 @users = User.all    

    
end

def index
	@answers = Answer.all
end

# GET /answers/new
# GET /answers/new.json
  def new
    @answer = Answer.new

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
      if (i.to_s != "utf8".to_s)||(i.to_s != "authencity_token".to_s)
        
        puts "parametro #{i} texto: #{v} entero"
      #if i.is_a? Integer
        
      #else
      #  puts "no integer"
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