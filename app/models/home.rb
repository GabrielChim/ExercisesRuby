class Home
  include Mongoid::Document

  field :title, type: String
  field :price, type: Float
  field :extra_service, type: Float, default: 0.000
  field :total_amount, type: Float, default: 0.000

  validates :title, :price, presence: true
end