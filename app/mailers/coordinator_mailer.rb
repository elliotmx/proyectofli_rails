class CoordinatorMailer < ActionMailer::Base
 default from: "noreply@fli.mx"

  def send_email(message)
    @msg = message	
    #@mail = 'delarosa.bdevelop@gmail.com'
    @mail = 'rxco.ar@gmail.com'

    mail( :to => @mail,
    :subject => 'Coordinador en FLI.mx',
    :content_type => "text/html" )
  end

end