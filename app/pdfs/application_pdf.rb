class ApplicationPdf < Prawn::Document

 def initialize(application, view)
   super()
   p = ""
   r = ""
   t = ""
   @view = view
   @application = application
   @answers = Answer.where("application_id = ?", @application.id)

@answers.each do |answer|
     #question = Question.find(answer.question_id)
     question = Question.where("id = ?", answer.question_id).first
     p = p+"\n\n #{question.spa_description}"
     r = r+"\n\n #{answer.value}"
     if question.id == 17
      m = Market.find(Integer(answer.value))
      r = r +".- "+ m.description
     end
     t = t + p + r

     p = ""
     r = ""
end
   text t
 end
end