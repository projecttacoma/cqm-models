class QDM::CareGoal < QDM::Datatype
  include Mongoid::Document
  field :relevant_period, type: QDM::Interval
  field :related_to, type: Array
  field :target_outcome
  field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.7'
  field :category, type: String, default: 'care_goal'
  field :qdm_version, type: String, default: '5.3'
end
