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

task :local => [:default] do
  puts "--- subiendo presentaciones al servidor local"
  sh "cp dist/* /srv/www/htdocs/html5/"
  puts "--- presentaciones subidas!"
end

task :upload => [:default] do
  puts "---subiendo presentaciones..."
  sh "scp dist/* rcancho@10.0.1.254:/home/grups/informatica/informatica4eso/HTML5/"
  puts "--- presentaciones subidas!"
end

task :dropbox => [:default] do
  puts "--- subiendo presentaciones a dropbox..."
  sh "cd ~/Desarrollo/curso_html5/dist; drop *"
  puts "-- presentaciones subidas!"
end
