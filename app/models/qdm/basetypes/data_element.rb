module QDM
  # Represents QDM datatype (parent class of all generated QDM datatype models)
  class DataElement
    include Mongoid::Document
    embedded_in :patient

    # Codes that describe this datatype.
    field :data_element_codes, type: Array, default: []

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
        { code: code.code, system: code.code_system }
      end
    end

    # Helper method that returns the codes on this data element as QDM::Code
    # objects.
    def codes
      data_element_codes.collect { |code| QDM::Code.demongoize(code) }
    end

    # Return the Mongo id for this datatype.
    def id
      _id
    end
  end
end
