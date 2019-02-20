module QDM
  # app/models/qdm/specialization.rb
  class Specialization < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :systemType
    field :version
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
