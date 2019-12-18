require 'rails_helper'

RSpec.describe Rent, type: :model do
  let!(:rent) { FactoryBot.create(:rent) }
 
  it "is valid with valid attributes" do
    expect(rent).to be_valid
  end

  it "is valid with status Started" do
    expect(rent.status).to eq(:started)
  end

  describe 'Associations' do
    it { should belong_to :user }
    it { should belong_to :home }
  end
end
