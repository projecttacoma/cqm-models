module QDM
  # app/models/qdm/enrollment_response.rb
  class EnrollmentResponse < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :status
    field :request
    field :outcome
    field :disposition
    field :created
    field :organization
    field :requestProvider
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
