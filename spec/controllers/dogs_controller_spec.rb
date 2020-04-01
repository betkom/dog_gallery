require 'rails_helper'

RSpec.describe DogsController, type: :controller do
  let(:user) { create(:user) }
  before { sign_in user }

  describe '#index' do
    it 'displays recent dogs' do
      2.times { create(:dog, user_id: user.id) }
      get :index
      expect(assigns(:dogs).size).to eq(2)
      expect(response).to be_successful
    end
  end

  describe '#show' do
    it 'displays the dog' do
      dog = create(:dog, user_id: user.id)
      get :show, params: {id: dog.id}
      expect(assigns(:dog).name).to eql(dog.name)
      expect(response).to be_successful
    end
  end

  describe '#update' do
    it 'updates the dog' do
      dog = create(:dog, user_id: user.id)
      patch :update, params: {id: dog.id, dog: {description: 'my dog'}}
      expect(response).to redirect_to(dog_path(assigns(:dog).id))
    end
  end

  describe '#create' do
    it 'creates the dog' do
      post :create, params: {dog: {description: 'my dog', name: "Test Dog"}}
      expect(assigns(:dog).name).to eql('Test Dog')
      expect(assigns(:dog).description).to eql('my dog')
      dog = assigns(:dog)
      expect(response).to redirect_to(dog_path(dog.id))
    end
  end
end
