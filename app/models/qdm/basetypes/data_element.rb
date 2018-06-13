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

    def mongoize
      json_rep = {}
      attribute_names.each do |field|
        json_rep[field] = send(field).mongoize
      end
      json_rep
    end

    # Include '_type' in any JSON output. This is necessary for deserialization.
    def to_json(options = nil)
      serializable_hash(methods: :_type).to_json(options)
    end

    class << self
      # Get the object as it was stored in the database, and instantiate
      # this custom class from it.
      #
      # The array elements in demongoize are the same 5 elements used in mongoize, i.e.
      # [ low, high ].
      def demongoize(object)
        return nil unless object
        object = object.symbolize_keys
        if object.is_a?(Hash)
          de = QDM::DataElement.new
          de.attribute_names.each do |field|
            de.send(field + '=', object[field.to_sym])
          end
          de
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
          de = QDM::DataElement.new
          de.attribute_names.each do |field|
            de.send(field + '=', object[field.to_sym])
          end
          de.mongoize
        else object
        end
      end
    end
  end
end
