module QDM
  # app/models/qdm/status_history.rb
  class StatusHistory < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :status
    field :period
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
