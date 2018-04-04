module QDM
  # app/models/qdm/physical_exam_performed.rb
  class PhysicalExamPerformed < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :author_datetime, type: DateTime
    field :relevant_period, type: QDM::Interval
    field :reason, type: QDM::Code
    field :method, type: QDM::Code
    field :result
    field :anatomical_location_site, type: QDM::Code
    field :negation_rationale, type: QDM::Code
    field :components, type: Array
    field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.62'
    field :category, type: String, default: 'physical_exam'
    field :qdm_status, type: String, default: 'performed'
    field :qdm_version, type: String, default: '5.3'
  end
end
