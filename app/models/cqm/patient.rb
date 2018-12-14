module CQM

  class TacomaPatient
    include Mongoid::Document
    field :givenNames, type: Array
    field :familyName, type: String
    field :bundleId, type: String
    field :expectedValues, type: Array
    field :notes, type: String
    has_one :patient, class_name: 'QDM::Patient', dependent: :destroy, autobuild: true

     # Include '_type' in any JSON output. This is necessary for deserialization.
    def to_json(options = nil)
      serializable_hash(include: :patient).to_json(options)
    end

  end
end