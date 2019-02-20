module QDM
  # app/models/qdm/terminology_capabilities.rb
  class TerminologyCapabilities < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :url
    field :version
    field :name
    field :title
    field :status
    field :experimental
    field :date
    field :publisher
    field :contact
    field :description
    field :useContext
    field :jurisdiction
    field :purpose
    field :copyright
    field :kind
    field :software
    field :implementation
    field :lockedDate
    field :codeSystem
    field :expansion
    field :codeSearch
    field :validateQDM::Code
    field :translation
    field :closure
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
