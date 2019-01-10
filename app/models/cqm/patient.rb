module CQM
  # Patient model that holds non-QDM data for the patient
  class Patient
    include Mongoid::Document
    field :givenNames, type: Array
    field :familyName, type: String
    field :bundleId, type: String
    field :expectedValues, type: Array
    field :notes, type: String
    embeds_one :qdmPatient, class_name: 'QDM::Patient', autobuild: true

    # Include '_type' in any JSON output. This is necessary for deserialization.
    def to_json(options = nil)
      serializable_hash(include: :_type).to_json(options)
    end
  end
end
