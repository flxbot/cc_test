Jekyll::Hooks.register(:site, :post_write) do |_site|

  system("gulp css")
end
