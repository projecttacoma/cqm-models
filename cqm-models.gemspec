lib = File.expand_path('lib', __dir__)

$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)

Gem::Specification.new do |spec|
  spec.name          = 'cqm-models'
  spec.version       = '4.0.2'
  spec.authors       = ['aholmes@mitre.org', 'mokeefe@mitre.org', 'lades@mitre.org']

  spec.summary       = 'Mongo models that correspond to the QDM specification.'
  spec.description   = 'This library contains auto generated Mongo (Mongoid) models that correspond to the QDM (Quality Data Model) specification.'
  spec.homepage      = 'https://github.com/projecttacoma/cqm-models'
  spec.license       = 'Apache-2.0'

  spec.files         = `git ls-files -z`.split("\x0").reject do |f|
    f.match(%r{^(test|spec|features)/})
  end
  spec.bindir        = 'exe'
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ['lib']

  spec.add_development_dependency 'bundle-audit'
  spec.add_development_dependency 'bundler', '~> 2.1.4'
  spec.add_development_dependency 'byebug', '~> 11.0.1'
  spec.add_development_dependency 'codecov'
  spec.add_development_dependency 'mongoid', '~> 6.4'
  spec.add_development_dependency 'rails', '~> 5.2'
  spec.add_development_dependency 'rake', '~> 12.3.3'
  spec.add_development_dependency 'rspec', '~> 3.0'
  spec.add_development_dependency 'rubocop', '~> 0.54.0'
  spec.add_development_dependency 'simplecov'
end
