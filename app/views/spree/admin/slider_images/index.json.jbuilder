json.array!(@slider_images) do |slider_image|
  json.extract! slider_image, :id
  json.url slider_image_url(slider_image, format: :json)
end
