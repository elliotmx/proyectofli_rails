namespace :questions do
    desc 'Regenerate questions from json'
    task :import => :environment do
        require 'json'
        file = File.read('lib/tasks/questions/questions.json')
        json_data = JSON.parse(file)
        @new_questions = json_data.each do |key|
          new_question = Question.new(key)
          new_question.save
          puts "imported question: #{new_question.inspect.to_s}"
        end
    end

    task :destroy => :environment do
      Question.destroy_all
      puts "All questions destroyed"
    end
end
