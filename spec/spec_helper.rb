require 'simplecov'
require 'codecov'
require 'bundler/setup'
require 'cqm/models'
require 'nokogiri'
require 'byebug'

SimpleCov.start do
  add_filter 'spec/**/*'
end

SimpleCov.formatter = SimpleCov::Formatter::Codecov

Mongoid.load!('config/mongoid.yml', :test)

RSpec.configure do |config|
  # Enable flags like --only-failures and --next-failure
  config.example_status_persistence_file_path = '.rspec_status'

  # Disable RSpec exposing methods globally on `Module` and `main`
  config.disable_monkey_patching!

  config.expect_with :rspec do |c|
    c.syntax = :expect
  end
end
