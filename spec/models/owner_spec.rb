require 'rails_helper'
RSpec.describe Owner, type: :model do
  let!(:owner) { FactoryBot.create(:owner) }
 
  it "is valid with valid attributes" do
    expect(owner).to be_valid
  end

  describe 'Validations' do
    it { should validate_presence_of :curp }
    it { should validate_presence_of :registered_in_srpago }
  end

  describe 'Associations' do
    it { should have_many :homes }
    it { should belong_to :user }
  end
end