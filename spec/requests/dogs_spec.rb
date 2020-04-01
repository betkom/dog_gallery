require 'rails_helper'

RSpec.describe "Dogs", type: :request do
  describe 'GET #index' do
    let(:user) { create(:user) }
    let(:dog) { create(:dog) }

    before { 
      2.times do
        create(:dog, user_id: user.id)
      end
      
    }

    it 'should fetch the dogs' do
      get "/dogs.json"

      expect(response).to have_http_status(200)

      expect(JSON.parse(response.body)['total_count']).to eql(2)
    end

    it 'paginates the records' do
      get "/dogs.json?per_page=1&page=1"

      api_response = JSON.parse(response.body)

      expect(api_response['records'].count).to eql(1)
      expect(api_response['current_page']).to eql(1)
    end
  end
end