json.array!(@themes) do |theme|
  json.extract! theme, :id
  json.url theme_url(theme, format: :json)
end
