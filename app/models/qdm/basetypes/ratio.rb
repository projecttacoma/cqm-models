module QDM
  # Represents a Ratio
  class Ratio
    attr_accessor :numerator, :denominator

    # Numerator and denominator are required
    def initialize(numerator, denominator)
      @numerator = numerator
      @denominator = denominator
    end

    # Converts an object of this instance into a database friendly value.
    def mongoize
      { numerator: @numerator, denominator: @denominator, _type: 'QDM::Ratio' }
    end

    class << self
      # Get the object as it was stored in the database, and instantiate
      # this custom class from it.
      #
      # The array elements in demongoize are the same 2 elements used in mongoize, i.e.
      # [ numerator, denominator ].
      def demongoize(object)
        return nil unless object

        object = object.symbolize_keys
        QDM::Ratio.new(object[:numerator], object[:denominator]) if object.is_a?(Hash)
      end

      # Takes any possible object and converts it to how it would be
      # stored in the database.
      def mongoize(object)
        case object
        when nil then nil
        when QDM::Ratio then object.mongoize
        when Hash
          object = object.symbolize_keys
          QDM::Ratio.new(object[:numerator], object[:denominator]).mongoize
        else object
        end
      end

      # Converts the object that was supplied to a criteria and converts it
      # into a database friendly form.
      def evolve(object)
        case object
        when QDM::Ratio then object.mongoize
        else object
        end
      end
    end
  end
end
