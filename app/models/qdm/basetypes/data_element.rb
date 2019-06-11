module QDM
  # Represents QDM datatype (parent class of all generated QDM datatype models)
  class DataElement
    include Mongoid::Document
    embedded_in :patient
    embedded_in :measure

    # Codes that describe this datatype.
    field :dataElementCodes, type: Array, default: []

    # Optional description.
    field :description, type: String

    # Valueset oid of the specific type.
    field :codeListId, type: String

    embeds_one :id, class_name: 'QDM::Id'

    def initialize(options = {})
      super(options)
      # default id to the mongo ObjectId for this DataElement if it isnt already defined
      self.id = QDM::Id.new(value: _id.to_s) unless id?
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
      fields.keys.each do |field|
        if send(field).is_a? DateTime
          send(field + '=', (send(field).to_time + seconds.seconds).to_datetime)
        end
        if (send(field).is_a? Interval) || (send(field).is_a? DataElement)
          send(field + '=', send(field).shift_dates(seconds))
        end

        # Special case for facility locations
        if field == 'facilityLocations'
          send(field).each do |facility_location|
            shift_facility_location_dates(facility_location, seconds)
          end
        elsif field == 'facilityLocation'
          facility_location = send(field)
          unless facility_location.nil?
            shift_facility_location_dates(facility_location, seconds)
            send(field + '=', facility_location)
          end
        end
      end
    end

    def shift_facility_location_dates(facility_location, seconds)
      facility_location['locationPeriod'][:low] = (facility_location['locationPeriod'][:low].to_time + seconds).to_datetime
      facility_location['locationPeriod'][:high] = (facility_location['locationPeriod'][:high].to_time + seconds).to_datetime
    end

    # The necessary reason for this function is to avoid a problem when shifting
    # past a year that is a leap year. February 29th dates are handled by moving
    # back to the 28th in non leap years
    def shift_years(year_shift)
      fields.keys.each do |field|
        if send(field).is_a? DateTime
          if send(field).month == 2 && send(field).day == 29 && !Date.leap?(year_shift + send(field).year)
            send(field + '=', send(field).change(year: year_shift + send(field).year, day: 28))
          else
            send(field + '=', send(field).change(year: year_shift + send(field).year))
          end
        end

        if (send(field).is_a? Interval) || (send(field).is_a? DataElement) || (send(field).is_a? FacilityLocation)
          send(field + '=', send(field).shift_years(year_shift))
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
          data_element = QDM.const_get(object[:_type])
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
          data_element = QDM.const_get(object[:_type])
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
