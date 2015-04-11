json.array!(@favicons) do |favicon|
  json.extract! favicon, :id
  json.url favicon_url(favicon, format: :json)
end
