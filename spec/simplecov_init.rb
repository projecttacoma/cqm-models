require 'simplecov'

SimpleCov.start do
  add_filter 'spec/'
end

if ENV['CODECOV_TOKEN']
  require 'codecov'
  SimpleCov.formatter = SimpleCov::Formatter::Codecov
end
