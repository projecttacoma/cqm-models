module QDM
  # app/models/qdm/communication_performed.rb
  class CommunicationPerformed < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :category, type: QDM::Code
    field :medium, type: QDM::Code
    field :sender, type: QDM::Code
    field :recipient, type: QDM::Code
    embeds_many :relatedTo, class_name: 'QDM::Id'
    field :relevantPeriod, type: QDM::Interval
    field :negationRationale, type: QDM::Code
    field :qdmTitle, type: String, default: 'Communication, Performed'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.132'
    field :qdmCategory, type: String, default: 'communication'
    field :qdmStatus, type: String, default: 'performed'
    field :hqmfTitle, type: String, default: 'Communication, Performed'
    field :qdmVersion, type: String, default: '5.4'
  end
end
