json.records do
  json.array! @dogs, partial: 'dogs/dog', as: :dog
end
json.total_count @total_count
json.per_page @per_page