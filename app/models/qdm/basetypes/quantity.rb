module QDM
  # Represents a Quantity
  class Quantity
    attr_accessor :value, :unit

    # Value and unit are required.
    def initialize(value, unit)
      @value = value
      @unit = unit
    end

    # Converts an object of this instance into a database friendly value.
    def mongoize
      { value: @value, unit: @unit, _type: 'QDM::Quantity' }
    end

    class << self
      # Get the object as it was stored in the database, and instantiate
      # this custom class from it.
      #
      # The array elements in demongoize are the same 5 elements used in mongoize, i.e.
      # [ value, unit ].
      def demongoize(object)
        return nil unless object

        object = object.symbolize_keys
        QDM::Quantity.new(object[:value], object[:unit]) if object.is_a?(Hash)
      end

      # Takes any possible object and converts it to how it would be
      # stored in the database.
      def mongoize(object)
        case object
        when nil then nil
        when QDM::Quantity then object.mongoize
        when Hash
          object = object.symbolize_keys
          QDM::Quantity.new(object[:value], object[:unit]).mongoize
        else object
        end
      end

      # Converts the object that was supplied to a criteria and converts it
      # into a database friendly form.
      def evolve(object)
        case object
        when QDM::Quantity then object.mongoize
        else object
        end
      end
    end
  end
end
