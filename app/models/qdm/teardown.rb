module QDM
  # app/models/qdm/teardown.rb
  class Teardown < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :action
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
