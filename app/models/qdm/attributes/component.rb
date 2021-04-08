module QDM
  # app/models/qdm/component.rb
  class Component < Attribute
    include Mongoid::Document
    field :code, type: QDM::Code
    field :result
    field :qdmVersion, type: String, default: '5.6'
  end
end
