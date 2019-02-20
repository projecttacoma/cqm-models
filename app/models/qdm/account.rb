module QDM
  # app/models/qdm/account.rb
  class Account < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :status
    field :type
    field :name
    field :subject
    field :servicePeriod
    field :coverage
    field :owner
    field :description
    field :guarantor
    field :partOf
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
