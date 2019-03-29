module CQM
  # ValueSet represents a collection of Concepts, used by the Measures to specify a set of codes for a particular topic
  class ValueSet
    include Mongoid::Document
    field :oid, type: String
    field :display_name, type: String
    field :version, type: String

    index oid: 1

    embeds_many :concepts

    scope :by_oid, ->(oid) { where(oid: oid) }
  end
end
