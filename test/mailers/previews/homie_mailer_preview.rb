class HomieMailerPreview < ActionMailer::Preview
  def welcome_email
    HomieMailer.welcome_email
  end
end