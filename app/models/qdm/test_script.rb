module QDM
  # app/models/qdm/test_script.rb
  class TestScript < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :url
    field :identifier
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
    field :origin
    field :destination
    field :metadata
    field :fixture
    field :profile
    field :variable
    field :setup
    field :test
    field :teardown
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
