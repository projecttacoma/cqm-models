module QDM
  # app/models/qdm/verification.rb
  class Verification < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :verified
    field :verifiedWith
    field :verificationDate
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
