class NotificationsMailer < ActionMailer::Base
  default :from => "admin@PSHQ.com"
  default :to => "shoaib@gems.techverx.com"

  def new_message(message)
    @message = message
    mail(:subject => "Feedback")
  end
end
