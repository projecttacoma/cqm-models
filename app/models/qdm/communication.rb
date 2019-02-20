module QDM
  # app/models/qdm/communication.rb
  class Communication < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :language
    field :preferred
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
