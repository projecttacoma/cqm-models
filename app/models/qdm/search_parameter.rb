module QDM
  # app/models/qdm/search_parameter.rb
  class SearchParameter < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :url
    field :version
    field :name
    field :derivedFrom
    field :status
    field :experimental
    field :date
    field :publisher
    field :contact
    field :description
    field :useContext
    field :jurisdiction
    field :purpose
    field :code
    field :base
    field :type
    field :expression
    field :xpath
    field :xpathUsage
    field :target
    field :multipleOr
    field :multipleAnd
    field :comparator
    field :modifier
    field :chain
    field :component
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
