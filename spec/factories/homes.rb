FactoryBot.define do
  factory :home do
    owner { FactoryBot.create(:owner) }
    price { Faker::Number.decimal(l_digits: 6, r_digits: 2)  }
    extra_service { Faker::Number.decimal(l_digits: 6, r_digits: 2)  }
    location { 
      [Faker::Number.decimal(l_digits: 2, r_digits: 3), 
      Faker::Number.decimal(l_digits: 2, r_digits: 3)] 
    }
  end
end