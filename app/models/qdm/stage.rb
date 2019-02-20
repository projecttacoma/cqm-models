module QDM
  # app/models/qdm/stage.rb
  class Stage < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :summary
    field :assessment
    field :type
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
