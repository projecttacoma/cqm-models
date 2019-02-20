module QDM
  # app/models/qdm/financial_resource_status_codes.rb
  class FinancialResourceStatusCodes < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
