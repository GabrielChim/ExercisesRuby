require 'rails_helper'

RSpec.describe User, type: :model do
  let!(:user) { FactoryBot.create(:user) }
 
  it "is valid with valid attributes" do
    expect(user).to be_valid
  end

  describe 'Validations' do
    it { should validate_presence_of :email }
    it { should validate_presence_of :name }
    it { should validate_presence_of :last_name }
    it { should validate_presence_of :mobile_phone }
    it { should validate_presence_of :work_place }
  end

  describe 'Associations' do
    it { should have_many :rents }
  end
end
