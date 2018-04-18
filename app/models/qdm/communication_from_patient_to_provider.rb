module QDM
  # app/models/qdm/communication_from_patient_to_provider.rb
  class CommunicationFromPatientToProvider < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :relatedTo, type: Array
    field :negationRationale, type: QDM::Code
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.8'
    field :category, type: String, default: 'communication'
    field :qdmStatus, type: String, default: 'from_patient_to_provider'
    field :qdmVersion, type: String, default: '5.3'
  end
end
