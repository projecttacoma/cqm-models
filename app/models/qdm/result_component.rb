module QDM
  # app/models/qdm/result_component.rb
  class ResultComponent < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :reference_range, type: QDM::Interval
    field :qdm_version, type: String, default: '5.3'
  end
end
