require_relative('../id.rb')
module QDM
  # Represents QDM datatype (parent class of all generated QDM datatype models)
  class DataElement
    include Mongoid::Document
    embedded_in :patient

    # Codes that describe this datatype.
    field :dataElementCodes, type: Array, default: []

    # Optional description.
    field :description, type: String

    # The id field, if needed will be created based on _id or from scratch
    field :id, type: QDM::Id, default: -> {
      QDM::Id.new({ value: self.has_attribute?(:_id) ? self._id.to_s : BSON::ObjectId.new.to_s })
    }

    # Overwrite the default id function added by mongoid
    def id()
      return attributes['id']
    end
    def id=(qdmId)
      attributes['id'] = qdmId
    end



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

    def mongoize
      json_representation = {}
      attribute_names.each do |field|
        json_representation[field] = send(field).mongoize
      end
      json_representation
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

        # Special case for facility locations
        next unless field == 'facilityLocations'
        send(field).each do |facility_location|
          facility_location['locationPeriod'][:low] = (facility_location['locationPeriod'][:low].to_time + seconds).to_datetime
          facility_location['locationPeriod'][:high] = (facility_location['locationPeriod'][:high].to_time + seconds).to_datetime
        end
      end
    end

    class << self
      # Get the object as it was stored in the database, and instantiate
      # this custom class from it.
      #
      def demongoize(object)
        return nil unless object
        object = object.symbolize_keys
        if object.is_a?(Hash)
          data_element = QDM::DataElement.new
          data_element.attribute_names.each do |field|
            data_element.send(field + '=', object[field.to_sym])
          end
          data_element
        else object
        end
      end

      # Takes any possible object and converts it to how it would be
      # stored in the database.
      def mongoize(object)
        case object
        when nil then nil
        when QDM::DataElement then object.mongoize
        when Hash
          object = object.symbolize_keys
          data_element = QDM::DataElement.new
          data_element.attribute_names.each do |field|
            data_element.send(field + '=', object[field.to_sym])
          end
          data_element.mongoize
        else object
        end
      end
    end
  end
end
