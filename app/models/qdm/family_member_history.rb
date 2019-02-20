module QDM
  # app/models/qdm/family_member_history.rb
  class FamilyMemberHistory < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :instantiatesCanonical
    field :instantiatesUri
    field :status
    field :dataAbsentReason
    field :patient
    field :date
    field :name
    field :relationship
    field :sex
    field :born
    field :age
    field :estimatedAge
    field :deceased
    field :reasonQDM::Code
    field :reasonReference
    field :note
    field :condition
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
