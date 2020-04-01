require 'rails_helper'

describe 'Dog resource', type: :feature do
  let(:user) { create(:user) }
  before { 
    login_as user
  }

  it 'can create a profile' do
    visit new_dog_path
    fill_in 'dog[name]', with: 'Speck'
    fill_in 'dog[description]', with: 'Just a dog'
    attach_file 'Image', 'spec/fixtures/images/speck.jpg'
    click_button 'Create Dog'
    expect(Dog.count).to eq(1)
  end

  it 'can edit a dog profile' do
    dog = create(:dog, user_id: user.id)
    login_as user
    visit edit_dog_path(dog)
    fill_in 'dog[name]', with: 'Speck'
    click_button 'Update Dog'
    expect(dog.reload.name).to eq('Speck')
  end

  it 'can delete a dog profile' do
    dog = create(:dog, user_id: user.id)
    login_as user
    visit dog_path(dog)
    click_link "Delete #{dog.name}'s Profile"
    expect(Dog.count).to eq(0)
  end

  it 'can display the dogs' do
    6.times do
      create(:dog, user_id: user.id)
    end
    visit dogs_path
  end
end
