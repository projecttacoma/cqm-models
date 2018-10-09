module QDM
  # app/models/qdm/result_component.rb
  class ResultComponent < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :referenceRange, type: QDM::Interval
    field :qdmVersion, type: String, default: '5.4'
  end
end
