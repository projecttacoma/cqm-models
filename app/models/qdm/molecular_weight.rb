module QDM
  # app/models/qdm/molecular_weight.rb
  class MolecularWeight < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :method
    field :type
    field :amount
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
