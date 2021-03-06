class AnswersController < ApplicationController
respond_to :html ,:js
#skip_before_action :verify_authenticity_token

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

        @answer = Answer.where(:application_id =>current_user.applications.first.id, :question_id => i.to_i ).first

        if(@answer == nil)
            @answer = Answer.create(:application_id =>current_user.applications.first.id, :question_id => i.to_i, :value => v)
        else
            @answer.update_attributes(:value => v)
        end
  
      end
    	
    end
    
    respond_with( current_user.applications.first , :layout => !request.xhr?)
  end #end of create method

end #end of the class