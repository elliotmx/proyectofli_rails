class Mailer < ActionMailer::Base
  default from: "noreply@fli.mx"

  def send_email(message)
    @msg = message
    mail( :to => @msg.mail,
    :subject => 'Thanks for signing up for our amazing fli website' )
  end

end
