Jekyll::Hooks.register(:site, :post_write) do |_site|
  system("./node_modules/.bin/gulp")
end
