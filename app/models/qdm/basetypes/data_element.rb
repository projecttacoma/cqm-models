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

    field :id, type: String

    def initialize(options = {})
      # class is reserved word. changed to clazz
      if options['class']
        options['clazz'] = options['class']
        options.delete('class')
      end
      super(options)
      # default id to the mongo ObjectId for this DataElement if it isnt already defined
      self.id = _id.to_s unless id?
    end

    # Returns the attribute requested on the datatype.
    def get(attribute)
      send(attribute) if has_attribute?(attribute)
    end

    # Returns all of the codes on this datatype in a way that is typical
    # to the CQL execution engine.
    def code_system_pairs
      codes.collect do |code|
        { code: code.code, system: code.system }
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
        send(field + '=', (send(field).to_time + seconds.seconds).to_datetime) if send(field).is_a? DateTime
        send(field + '=', send(field).shift_dates(seconds)) if (send(field).is_a? Interval) || (send(field).is_a? DataElement)

        if field == 'result'
          result = send(field)
          unless result.nil? || (!result.is_a? Time)
            send(field + '=', (result.to_time + seconds.seconds).to_datetime)
          end
        # Special case for facility locations
        elsif field == 'facilityLocations'
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
        if send(field).is_a?(QDM::Date) || send(field).is_a?(DateTime)
          # Do not shift Time values. They are stored as DateTimes with year 0.
          next if send(field).year.zero?
          raise RangeError, 'Year was shifted after 9999 or before 0001' if send(field).year + year_shift > 9999 || send(field).year + year_shift < 1

          if send(field).month == 2 && send(field).day == 29 && !::Date.leap?(year_shift + send(field).year)
            if send(field).is_a?(QDM::Date)
              shifted_date = send(field)
              shifted_date.year = shifted_date.year + year_shift
              shifted_date.day = 28
              send(field + '=', shifted_date)
            else
              send(field + '=', send(field).change(year: year_shift + send(field).year, day: 28))
            end
          elsif send(field).is_a?(QDM::Date)
            shifted_date = send(field)
            shifted_date.year = shifted_date.year + year_shift
            send(field + '=', shifted_date)
          else
            send(field + '=', send(field).change(year: year_shift + send(field).year))
          end
        end

        if send(field).is_a? FacilityLocation
          facility_location = send(field)
          unless facility_location.nil?
            shift_facility_location_years(facility_location, year_shift)
            send(field + '=', facility_location)
          end
        end

        if field == 'facilityLocations'
          facilityLocations = send(field)
          unless facilityLocations.nil?
            shiftedFacilityLocations = []
            facilityLocations.each do |location|
              # Need to convert to a QDM::FacilityLocation because it is being passed in as a Hash
              facilityLocation = QDM::FacilityLocation.new(location)
              shift_facility_location_years(facilityLocation, year_shift)
              shiftedFacilityLocations << facilityLocation
            end
            send(field + '=', shiftedFacilityLocations)
          end
        end

        send(field + '=', send(field).shift_years(year_shift)) if (send(field).is_a? Interval) || (send(field).is_a? DataElement)
      end
    end

    def shift_facility_location_years(facility_location, year_shift)
      facility_location.locationPeriod = facility_location.locationPeriod.shift_years(year_shift)
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
