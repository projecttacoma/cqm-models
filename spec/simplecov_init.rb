require 'simplecov'
require 'codecov'

SimpleCov.start do
  add_filter 'spec/'
end

SimpleCov.formatter = SimpleCov::Formatter::Codecov
