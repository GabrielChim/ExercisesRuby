require 'rails_helper'

describe Homes::SimilarHome  do
  let!(:owner) { FactoryBot.create(:owner) } 
  let(:params) { 
    {
      owner: owner, 
      price: 17000.00, 
      extra_service: 3000.00, 
      home_master_id: nil,
      location: [12.111, 45.111],
      status: :published
    }
  }

  let!(:home1) { FactoryBot.create(:home, params) }
  let!(:home2) { FactoryBot.create(:home, params) }
  let!(:home3) { FactoryBot.create(:home) }

  context ".call" do
    it "find similar homes" do
      ids_similar_ctx = []
      ids_similar_homes = [home1[:id], home2[:id]]
      find_similar_ctx = ::Homes::SimilarHome.call

      find_similar_ctx.similar_homes.map do |home| 
        ids_similar_ctx.push(home[2])
      end

      expect(find_similar_ctx.success?).to eq(true)
      expect(find_similar_ctx.similar_homes.size).to eq(2)
      expect(ids_similar_homes).to eq(ids_similar_ctx)
    end
  end
end