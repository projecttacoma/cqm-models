module QDM
  # app/models/qdm/result_component.rb
  class ResultComponent < Component
    include Mongoid::Document
    field :referenceRange, type: QDM::Interval
  end
end
