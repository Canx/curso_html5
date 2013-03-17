directory "dist"
files = FileList['*.md'] 
html_files = files.ext('html')

rule '.html' => '.md'  do |t|
  puts "--- generando presentacion #{t.name}..."
  sh "landslide -i '#{t.source}' -d 'dist/#{t.name}'"
end

task :default => ["dist"] do 
  html_files.each do |file|
    Rake::Task[file].invoke
  end
  puts "--- todas las presentaciones generadas!"
end
