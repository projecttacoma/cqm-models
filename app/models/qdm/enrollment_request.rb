module QDM
  # app/models/qdm/enrollment_request.rb
  class EnrollmentRequest < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :status
    field :created
    field :insurer
    field :provider
    field :candidate
    field :coverage
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
