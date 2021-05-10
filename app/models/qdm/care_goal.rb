module QDM
  # app/models/qdm/care_goal.rb
  class CareGoal < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :statusDate, type: Date
    field :relevantPeriod, type: QDM::Interval
    field :relatedTo, type: Array
    field :targetOutcome
    embeds_many :performer, class_name: 'QDM::Entity'
    field :qdmTitle, type: String, default: 'Care Goal'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.7'
    field :qdmCategory, type: String, default: 'care_goal'
    field :qdmVersion, type: String, default: '5.6'
  end
end
