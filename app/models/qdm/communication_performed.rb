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
    field :qdmVersion, type: String, default: '5.4'
  end
end
