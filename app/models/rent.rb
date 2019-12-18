class Rent
  include Mongoid::Document
  include Mongoid::Enum

  enum :status, [:started, :finished, :canceled]

  belongs_to :user
  belongs_to :home
end
