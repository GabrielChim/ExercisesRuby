class SimilarHome  
  def self.list_similar_homes
    ids_owners = Owner.pluck(:id)
    ids_homes_equals = []
    homes_equals = []

    ids_owners.map do |id|
      homes = Home.where(owner: id, home_master_id: nil, _status: :published)
      next if homes.size < 2
      
      homes.map do |home|
        id_data_homes = Home.where(owner: home.owner.id, 
                    total_amount: home.total_amount,
                    location: home.location,
                    home_master_id: nil).pluck(:id)
        next if id_data_homes.size < 2
        ids_homes_equals.push(id_data_homes)
      end
    end

    ids_homes_equals.uniq.map do |id_home|
      id_home.map do |id|
        home = Home.find(id: id)
        puts "#{home.owner.user.name} #{home.owner.user.last_name}," \
              "#{home.owner.user.email},"  \
              "#{home.id}," \
              "#{home.home_master_id}," \
              "#{home.total_amount}," \
              "#{home.status}," \
              "#{home.location}"
      end
    end
  end
end