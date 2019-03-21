require "rails/generators/named_base"
require "rails/generators/active_model"
require "/Users/cspringatecombs/.rvm/gems/ruby-2.3.7/gems/mongoid-6.3.0/lib/rails/generators/mongoid/model/model_generator.rb"

module Rails
  module Generators
    class GeneratedAttribute
      attr_accessor :default
    end
  end
end

module CustomMongo
  module Generators
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
        template "/Users/cspringatecombs/git/cqm-models/lib/generators/custom_mongo/model.rb.tt", File.join("app/models", class_path, "#{file_name}.rb")
      end


    end
  end
end
