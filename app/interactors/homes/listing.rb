class Homes::Listing
  include Interactor

  def call
    homes = Home::Listing.where(listing_name: "mercado_libre")
    types = homes.map { |home| eval(home.publish_xml_or_response)[:listing_type_id] }
    listings = create_hash(types.uniq)

    homes.map do |home| 
      listings[eval(home.publish_xml_or_response)[:listing_type_id]][:homes_count] += 1
      listings[eval(home.publish_xml_or_response)[:listing_type_id]][:homes_id].push(home.home_id)
    end
    
    listing_subtraction(listings)
    ouststanding_ctx = Homes::Outstanding.call
    context.all_data = {}
    context.all_data[:listing] = listings
    context.all_data[:outstanding] = ouststanding_ctx.outstanding
  end

  def listing_subtraction(listings)
    listings.each do |type, value|
      value[:homes_id].map do |id|
        next unless Home::Listing::Outstanding.where(home_id: id.to_s, _outstanding_type: type).first.present?
        value[:homes_count] -= 1
        value[:homes_id].delete(id)
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