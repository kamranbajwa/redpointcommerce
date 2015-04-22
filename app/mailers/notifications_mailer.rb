class NotificationsMailer < ActionMailer::Base
   default :from => "noreply@youdomain.dev"
  default :to => "shoaib@gems.techverx.com"

  def new_message(message)
    @message = message
    mail(:subject => "Feedback")
  end
end
