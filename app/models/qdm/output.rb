module QDM
  # app/models/qdm/output.rb
  class Output < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
