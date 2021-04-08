module QDM
  # app/models/qdm/substance_administered.rb
  class SubstanceAdministered < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :relevantDatetime, type: DateTime
    field :relevantPeriod, type: QDM::Interval
    field :dosage, type: QDM::Quantity
    field :frequency, type: QDM::Code
    field :route, type: QDM::Code
    field :negationRationale, type: QDM::Code
    embeds_many :performer, class_name: 'QDM::Entity'
    field :qdmTitle, type: String, default: 'Substance, Administered'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.73'
    field :qdmCategory, type: String, default: 'substance'
    field :qdmStatus, type: String, default: 'administered'
    field :qdmVersion, type: String, default: '5.6'
  end
end
