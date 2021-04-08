module QDM
  # app/models/qdm/result_component.rb
  class ResultComponent < Component
    include Mongoid::Document
    include Mongoid::Timestamps
    field :referenceRange, type: QDM::Interval
  end
end
