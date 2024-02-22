module QDM
  # app/models/qdm/identifier.rb
  class Identifier < Attribute
    include Mongoid::Document
    field :namingSystem, type: String
    field :value, type: String
    field :qdmVersion, type: String, default: '5.6'

    validates_uniqueness_of :value, conditions: -> { where(namingSystem: CQM::Provider::NPI_OID) }
  end
end
