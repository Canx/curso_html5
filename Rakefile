directory "dist"
files = FileList['*.md'] 
html_files = files.ext('html')

rule '.html' => '.md'  do |t|
  sh "landslide -i '#{t.source}' -d 'dist/#{t.name}'"
end

task :default => ["dist", html_files] do 
  puts "Presentacion generada!"
end
