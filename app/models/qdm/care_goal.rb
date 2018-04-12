module QDM
  # app/models/qdm/care_goal.rb
  class CareGoal < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :relevantPeriod, type: QDM::Interval
    field :relatedTo, type: Array
    field :targetOutcome
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.3.7'
    field :category, type: String, default: 'care_goal'
    field :qdmVersion, type: String, default: '5.3'
  end
end
