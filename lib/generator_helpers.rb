require 'erb'
require 'active_support/all'

# Helper file for generating classes
module GeneratorHelpers
  def self.inject_extension(extension_path, file_path)
    # Inject Ruby Patient model extensions
    template = File.read(extension_path)
    renderer = ERB.new(template, nil, '-')
    rb_model = File.read(file_path)
    rb_model.gsub!(/end/, renderer.result(binding))
    File.open(file_path, 'w') { |file| file.write(rb_model) }
  end
end
