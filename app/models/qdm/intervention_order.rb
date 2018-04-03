module QDM
  # app/models/qdm/intervention_order.rb
  class InterventionOrder < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :author_datetime, type: DateTime
    field :reason, type: QDM::Code
    field :negation_rationale, type: QDM::Code
    field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.35'
    field :category, type: String, default: 'intervention'
    field :qdm_status, type: String, default: 'order'
    field :qdm_version, type: String, default: '5.3'
    field :class_name, type: String, default: 'InterventionOrder'
  end
end
