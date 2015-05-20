json.array!(@spree_admin_blogs) do |spree_admin_blog|
  json.extract! spree_admin_blog, :id
  json.url spree_admin_blog_url(spree_admin_blog, format: :json)
end
