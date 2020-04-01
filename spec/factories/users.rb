FactoryBot.define do
  factory :user do
    sequence :name do |n|
      "Good Pup #{n}"
    end
    sequence :email do |n|
      "email-test#{n}@test.com"
    end
    password 'testing'
    password_confirmation 'testing'
  end
end