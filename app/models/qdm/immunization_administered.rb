module QDM
  # app/models/qdm/immunization_administered.rb
  class ImmunizationAdministered < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :relevantDatetime, type: DateTime
    field :reason, type: QDM::Code
    field :dosage, type: QDM::Quantity
    field :route, type: QDM::Code
    field :negationRationale, type: QDM::Code
    embeds_many :performer, class_name: 'QDM::Entity'
    field :qdmTitle, type: String, default: 'Immunization, Administered'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.112'
    field :qrdaOid, type: String, default: '2.16.840.1.113883.10.20.24.3.140'
    field :qdmCategory, type: String, default: 'immunization'
    field :qdmStatus, type: String, default: 'administered'
    field :qdmVersion, type: String, default: '5.6'
  end
end
