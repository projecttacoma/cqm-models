module QDM
  # app/models/qdm/family_history.rb
  class FamilyHistory < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :relationship, type: QDM::Code
    field :hqmfTitle, type: String, default: 'Family History'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.111'
    field :qrdaOid, type: String, default: '2.16.840.1.113883.10.20.24.3.12'
    field :qdmCategory, type: String, default: 'family_history'
    field :qdmVersion, type: String, default: '5.4'
  end
end
