class Homes::Outstanding
  include Interactor

  def call
    provider = ListingProvider.find_by(name: "mercado_libre")
    homes = Home::Listing::Outstanding.where(listing_provider_id: provider.id)

    types = homes.map(&:outstanding_type)
    context.outstanding = create_hash(types.uniq)

    homes.map do |home|
      context.outstanding[home.outstanding_type][:homes_count] += 1
      context.outstanding[home.outstanding_type][:homes_id].push(home.home_id)
    end
    
    outstanding_subtraction(context.outstanding)
  end

  def outstanding_subtraction(outstandings)
    outstandings.each do |type, value|
      value[:homes_id].map do |id|
        home = Home::Listing.where(home_id: id.to_s).first
        if home.present? && eval(home.publish_xml_or_response)[:listing_type_id] == type
          value[:homes_count] -= 1
          value[:homes_id].delete(id)
        end
      end
    end
  end

  def create_hash(types)
    outstanding = {}
    types.map do |key|
      outstanding[key] =
        {
          homes_count: 0,
          homes_id: []
        }
    end
    outstanding
  end
end