namespace :setup do
    desc 'set users'
    task :users => :environment do
      user = User.new({:email => "admin@helppy.com", :role => Role.find_by(name: "Admin"), :password => "adminpass", :password_confirmation => "adminpass" , user_profile_id: 3, name:"admin"})
      user.save
      puts "admin creado correctamente: admin@helppy.com : adminpass"
    end
end
