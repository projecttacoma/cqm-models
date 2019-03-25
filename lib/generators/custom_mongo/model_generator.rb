require 'rails/generators/named_base'
require 'rails/generators/active_model'
require File.join(Gem::Specification.find_by_name('mongoid').gem_dir, 'lib/rails/generators/mongoid/model/model_generator.rb')

module Rails
  module Generators
    # Extend this class to add the "default" field used in the generator.
    class GeneratedAttribute
      attr_accessor :default
    end
  end
end

module CustomMongo
  module Generators
    # Extend this class to add the "default" field.
    class ModelGenerator < ::Mongoid::Generators::ModelGenerator
      def initialize(args, *options)
        custom_attributes = args[1]
        args = [args[0]] # "super" expects the name as arg[0], then we custom parse the attributes
        super
        self.attributes = custom_attributes.map do |attribute|
          att = Rails::Generators::GeneratedAttribute.new(attribute[:name], attribute[:type].to_sym)
          att.default = attribute[:default]
          att
        end
      end

      def create_model_file
        template File.join(File.dirname(__FILE__), 'model.rb.tt'), File.join('app/models', class_path, "#{file_name}.rb")
      end
    end
  end
end
