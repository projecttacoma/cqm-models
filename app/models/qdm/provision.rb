module QDM
  # app/models/qdm/provision.rb
  class Provision < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :period
    field :actor
    field :action
    field :securityLabel
    field :purpose
    field :class
    field :code
    field :dataPeriod
    field :data
    field :provision
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
