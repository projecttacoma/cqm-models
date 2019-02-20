module QDM
  # app/models/qdm/not_available.rb
  class NotAvailable < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :description
    field :during
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
