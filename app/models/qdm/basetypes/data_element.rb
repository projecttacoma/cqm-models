module QDM
  # Represents QDM datatype (parent class of all generated QDM datatype models)
  class DataElement
    include Mongoid::Document
    embedded_in :patient

    # Codes that describe this datatype.
    field :dataElementCodes, type: Array, default: []

    # Optional description.
    field :description, type: String

    # Returns the attribute requested on the datatype.
    def get(attribute)
      send(attribute) if has_attribute?(attribute)
    end

    # Returns all of the codes on this datatype in a way that is typical
    # to the CQL execution engine.
    def code_system_pairs
      codes.collect do |code|
        { code: code.code, system: code.codeSystem }
      end
    end

    # Helper method that returns the codes on this data element as QDM::Code
    # objects.
    def codes
      dataElementCodes.collect { |code| QDM::Code.demongoize(code) }
    end

    # Return the Mongo id for this datatype.
    def id
      _id
    end

    # Include '_type' in any JSON output. This is necessary for deserialization.
    def to_json(options = nil)
      serializable_hash(methods: :_type).to_json(options)
    end

    # Shift all fields that deal with dates by the given value.
    # Given value should be in seconds. Positive values shift forward, negative
    # values shift backwards.
    def shift_dates(seconds)
      # Iterate over fields
      fields.keys.each do |field|
        # Check if field is a DateTime
        if send(field).is_a? DateTime
          send(field + '=', (send(field).to_time + seconds.seconds).to_datetime)
        end
        # Check if field is an Interval
        if (send(field).is_a? Interval) || (send(field).is_a? DataElement)
          send(field + '=', send(field).shift_dates(seconds))
        end
      end
    end
  end
end
