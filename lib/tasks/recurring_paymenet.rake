require 'ffaker'
require 'pathname'
require 'spree/sample'
namespace :recurring_paymenet do
desc "Daily subscribution"
  task :task_order => :environment do
  end
  desc "Weekly subscribation "
  task :weekly_reorder => :environment do

  end

  desc "Monthely subscribution"
  task :monthly_reorder => :environment do
  end
  desc "Yearly subscribtions"
  task :yearly_reorder => :environment do
  end
end