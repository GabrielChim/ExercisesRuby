class Home
  include Mongoid::Document
  include Mongoid::Enum

  before_validation :set_total_amount

  field :price, type: Float
  field :extra_service, type: Float
  field :total_amount, type: Float
  field :home_features, type: Hash, default: {  garden: false, furnished: false, gym: false }
  enum :status, [:in_progress, :published, :rented]

  belongs_to :owner
  has_many :rents

  validates :price, :extra_service, :total_amount, :status, presence: true

  private
  
  def set_total_amount
    self.total_amount = price + extra_service
  end
end
