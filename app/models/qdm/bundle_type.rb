module QDM
  # app/models/qdm/bundle_type.rb
  class BundleType < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :value
    field :qdmVersion, type: String, default: '4.0.0'
  end
end
