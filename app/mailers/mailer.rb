class Mailer < ActionMailer::Base
  default from: "noreply@fli.mx"

  def send_email(message)
    @msg = message
    #@mail = 'delarosa.bdevelop@gmail.com'
    @mail = 'rxco.ar@gmail.com'

    mail( :to => @mail,
    :subject => 'nuevo correo desde fli.mx',
    :content_type => "text/html" )
  end

end