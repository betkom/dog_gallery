class Dog < ApplicationRecord
  has_many_attached :images
  belongs_to :user
  alias_attribute :owner, :user

  has_many :likes, dependent: :destroy

  scope :with_likes_count_per_hour, -> { left_joins(:likes).where(likes: {created_at: 1.hour.ago..Time.now}).group("id").order("COUNT(likes.id) DESC") }
end
