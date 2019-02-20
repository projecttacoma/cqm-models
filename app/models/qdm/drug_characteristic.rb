module QDM
  # app/models/qdm/drug_characteristic.rb
  class DrugCharacteristic < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :type
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
