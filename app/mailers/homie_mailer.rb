class HomieMailer < ApplicationMailer
  default from: 'notifications@example.com'
 
  def welcome_email
    @user = "Gabo"
    mail(to: @user, subject: 'Welcome to My Awesome Site')
  end
end
