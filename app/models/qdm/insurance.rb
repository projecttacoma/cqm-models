module QDM
  # app/models/qdm/insurance.rb
  class Insurance < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :sequence
    field :focal
    field :identifier
    field :coverage
    field :businessArrangement
    field :preAuthRef
    field :claimResponse
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
