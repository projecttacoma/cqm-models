module QDM
  # app/models/qdm/component.rb
  class Component < DataElement
    include Mongoid::Document
    field :code, type: QDM::Code
    field :result
    field :qdmVersion, type: String, default: '5.4'
  end
end
