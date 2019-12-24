namespace :home do
  desc "Tarea que crea dos registros homes."

  task create_homes: :environment do
    user = create_user
    owner = create_owner(user)
    Home.find_or_create_by(owner: owner, price: 12000.00, extra_service: 20000.00)
    Home.find_or_create_by(owner: owner, price: 10000.00, extra_service: 10000.00)
  end

  def create_user
    User.create_with(
      name: "jeremias", 
      last_name: "pech", 
      mobile_phone: "987654323", 
      work_place: "homie23"
    ).find_or_create_by(email: "jeremy1996@gmail")
  end

  def create_owner(user)
    Owner.create_with( 
      curp: "CIPG960206HYNHCB07", 
      registered_in_srpago: true
    ).find_or_create_by(user: user)
  end
end