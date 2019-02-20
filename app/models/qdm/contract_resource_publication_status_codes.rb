module QDM
  # app/models/qdm/contract_resource_publication_status_codes.rb
  class ContractResourcePublicationStatusCodes < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
