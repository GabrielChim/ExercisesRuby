namespace :home do
  desc "Tarea que crea dos registros homes."

  task create_homes: :environment do
    user = create_user
    owner = create_owner(user)
    Home.create(owner: owner, price: 12000.00, extra_service: 200.00)
    Home.create(owner: owner, price: 10000.00, extra_service: 100.00)
    puts "tarea ejecutada"
  end

  def create_user
    User.create(
      email: "gabo@gmail", 
      name: "gabo", 
      last_name: "pech", 
      mobile_phone: "98765432", 
      work_place: "homie"
    )
  end

  def create_owner(user)
    Owner.create(
      user: user, 
      curp: "klnsfklnfklsnlksn", 
      registered_in_srpago: false
    )
  end
end