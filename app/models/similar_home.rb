class SimilarHome  
  def self.list_ids
    ids_owners = Owner.pluck(:id)
    ids_homes_equals = []
    homes_equals = []

    ids_owners.map do |id|
      homes = Home.where(owner: id, 
              home_master_id: nil, 
              _status: :published)
      if homes.count > 1
        homes.map do |home|
          id_data_homes = Home.where(owner: home.owner.id, 
                      total_amount: home.total_amount,
                      location: home.location,
                      home_master_id: nil).pluck(:id)
          if id_data_homes.count > 1
            ids_homes_equals.push(id_data_homes)
          end
        end
      end
    end

    ids_homes_equals.uniq.map do |id_home|
      id_home.map do |id|
        home = Home.where(id: id)
        full_name = "#{home[0].owner.user.name} #{home[0].owner.user.last_name}"
        email = home[0].owner.user.email
        id_depa = home[0].id
        precio_depa = home[0].total_amount
        status_depa = home[0].status
        location_depa = home[0].location

        puts "#{full_name},#{email},#{id_depa},#{precio_depa},#{status_depa},#{location_depa}"
      end
    end
  end
end