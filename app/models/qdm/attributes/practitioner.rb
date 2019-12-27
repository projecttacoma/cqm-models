module QDM
  # app/models/qdm/practitioner.rb
  class Practitioner < Entity
    include Mongoid::Document
    embedded_in :data_element
    field :role, type: QDM::Code
    field :specialty, type: QDM::Code
    field :qualification, type: QDM::Code
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.137'
    field :qrdaOid, type: String, default: '2.16.840.1.113883.10.20.24.3.162'
  end
end
