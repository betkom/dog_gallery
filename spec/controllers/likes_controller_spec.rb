require 'rails_helper'

RSpec.describe LikesController, type: :controller do
  let(:user) { create(:user) }
  let(:dog) { create(:dog, user_id: user.id) }
  before { sign_in user }

  describe '#create' do
    context 'when user has not liked the dog' do
      it 'creates the like record' do
        post :create, params: {dog_id: dog.id}
        expect(response).to redirect_to(dog_path(dog.id))
      end
    end

    context 'when user already liked the dog' do
      it 'creates the like record' do
        create(:like, user_id: user.id, dog_id: dog.id)

        post :create, params: {dog_id: dog.id}
        expect(flash[:notice]).to eql('You already liked this dog')
      end
    end
  end
end
