namespace :home do
  desc "Tarea que crea dos registros homes."

  task create_homes: :environment do
    user = create_user
    owner = create_owner(user)
    Home.create(owner: owner, 
                price: 17000.00, 
                extra_service: 3000.00, 
                home_master_id: nil,
                location: [12.111, 45.111],
                status: :published)
    Home.create(owner: owner, 
                price: 17000.00, 
                extra_service: 3000.00, 
                home_master_id: nil,
                location: [12.111, 45.111],
                status: :published)
  end

  def create_user
    User.create_with(
      name: "Yaneli", 
      last_name: "uc", 
      mobile_phone: "987654323", 
      work_place: "homie"
    ).find_or_create_by(email: "yanely@gmail.com")
  end

  def create_owner(user)
    Owner.create_with( 
      curp: "CIPG9602078HJ98", 
      registered_in_srpago: true
    ).find_or_create_by(user: user)
  end
end