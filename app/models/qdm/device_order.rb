module QDM
  # app/models/qdm/device_order.rb
  class DeviceOrder < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :author_datetime, type: DateTime
    field :negation_rationale, type: QDM::Code
    field :reason, type: QDM::Code
    field :hqmf_oid, type: String, default: '2.16.840.1.113883.10.20.28.3.15'
    field :category, type: String, default: 'device'
    field :status, type: String, default: 'order'
    field :qdm_version, type: String, default: '5.3'
  end
end
