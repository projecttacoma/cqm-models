module QDM
  # app/models/qdm/request_group.rb
  class RequestGroup < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :identifier
    field :instantiatesCanonical
    field :instantiatesUri
    field :basedOn
    field :replaces
    field :groupIdentifier
    field :status
    field :intent
    field :priority
    field :code
    field :subject
    field :context
    field :authoredOn
    field :author
    field :reasonQDM::Code
    field :reasonReference
    field :note
    field :action
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
