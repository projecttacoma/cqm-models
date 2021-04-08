module QDM
  # app/models/qdm/intervention_performed.rb
  class InterventionPerformed < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :relevantDatetime, type: DateTime
    field :relevantPeriod, type: QDM::Interval
    field :reason, type: QDM::Code
    field :result
    field :status, type: QDM::Code
    field :negationRationale, type: QDM::Code
    embeds_many :performer, class_name: 'QDM::Entity'
    field :relatedTo, type: Array
    field :qdmTitle, type: String, default: 'Intervention, Performed'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.36'
    field :qdmCategory, type: String, default: 'intervention'
    field :qdmStatus, type: String, default: 'performed'
    field :qdmVersion, type: String, default: '5.6'
  end
end
