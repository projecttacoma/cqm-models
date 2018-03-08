module QDM
  # Represents a Quantity
  class Quantity
    attr_reader :value, :unit

    # Code and code system are required (at minimum).
    def initialize(value, unit)
      @value = value
      @unit = unit
    end

    # Converts an object of this instance into a database friendly value.
    def mongoize
      { value: @value, unit: @unit }
    end

    class << self
      # Get the object as it was stored in the database, and instantiate
      # this custom class from it.
      #
      # The array elements in demongoize are the same 5 elements used in mongoize, i.e.
      # [ value, unit ].
      def demongoize(object)
        QDM::Quantity.new(object[:value], object[:unit]) if object.is_a?(Hash)
      end

      # Takes any possible object and converts it to how it would be
      # stored in the database.
      def mongoize(object)
        case object
        when QDM::Quantity then object.mongoize
        when Hash then QDM::Quantity.new(object[:value], object[:unit]).mongoize
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
