module QDM
  # app/models/qdm/communication_performed.rb
  class CommunicationPerformed < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :category, type: QDM::Code
    field :medium, type: QDM::Code
    embeds_many :sender, class_name: 'QDM::Entity'
    embeds_many :recipient, class_name: 'QDM::Entity'
    field :relatedTo, type: Array
    field :sentDatetime, type: DateTime
    field :receivedDatetime, type: DateTime
    field :negationRationale, type: QDM::Code
    field :qdmTitle, type: String, default: 'Communication, Performed'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.132'
    field :qdmCategory, type: String, default: 'communication'
    field :qdmStatus, type: String, default: 'performed'
    field :qdmVersion, type: String, default: '5.6'
  end
end
