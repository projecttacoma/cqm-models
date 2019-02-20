module QDM
  # app/models/qdm/invoice_status.rb
  class InvoiceStatus < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
