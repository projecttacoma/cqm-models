module QDM
  # app/models/qdm/consent_provision_type.rb
  class ConsentProvisionType < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
