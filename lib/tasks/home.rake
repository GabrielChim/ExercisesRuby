namespace :home do
  desc "Tarea que crea dos registros homes."

  task create_homes: :environment do
    user = create_user
    owner = create_owner(user)
    owner.homes.create([
      { price: 12000.00, extra_service: 20000.00 },
      { price: 10000.00, extra_service: 10000.00 }
    ])
  end

  def create_user
    User.create_with(
      name: "jeremias", 
      last_name: "pech", 
      mobile_phone: "987654323nj", 
      work_place: "homie23"
    ).find_or_create_by(email: "jeremy1996@gmail")
  end

  def create_owner(user)
    Owner.create_with( 
      curp: "klnsfklnfklsnlksnknfskldfdf", 
      registered_in_srpago: true
    ).find_or_create_by(user: user)
  end
end