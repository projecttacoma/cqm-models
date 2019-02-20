module QDM
  # app/models/qdm/request_priority.rb
  class RequestPriority < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
