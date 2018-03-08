module QDM
  # app/models/qdm/physical_exam_order.rb
  class PhysicalExamOrder < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :author_datetime, type: DateTime
    field :reason, type: QDM::Code
    field :method, type: QDM::Code
    field :anatomical_location_site, type: QDM::Code
    field :negation_rationale, type: QDM::Code
    field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.61'
    field :category, type: String, default: 'physical_exam'
    field :status, type: String, default: 'order'
    field :qdm_version, type: String, default: '5.3'
  end
end
