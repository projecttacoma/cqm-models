module QDM
  # app/models/qdm/family_history.rb
  class FamilyHistory < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :relationship
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.111'
    field :qrdaOid, type: String, default: '2.16.840.1.113883.10.20.24.3.12'
    field :category, type: String, default: 'family_history'
    field :qdmVersion, type: String, default: '5.3'
  end
end
