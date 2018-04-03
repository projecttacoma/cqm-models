module QDM
  # Represents an Interval
  class Interval
    attr_reader :low, :high

    # Low and high are required (at minimum).
    def initialize(low, high, low_closed = true, high_closed = true)
      @low = low
      @high = high
      @low_closed = low_closed
      @high_closed = high_closed
    end

    # Converts an object of this instance into a database friendly value.
    def mongoize
      { low: @low, high: @high, low_closed: @low_closed, high_closed: @high_closed }
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
        QDM::Interval.new(object[:low], object[:high], object[:low_closed], object[:high_closed]) if object.is_a?(Hash)
      end

      # Takes any possible object and converts it to how it would be
      # stored in the database.
      def mongoize(object)
        case object
        when nil then nil
        when QDM::Interval then object.mongoize
        when Hash
          object = object.symbolize_keys
          QDM::Interval.new(object[:low], object[:high], object[:low_closed], object[:high_closed]).mongoize
        else object
        end
      end

      # Converts the object that was supplied to a criteria and converts it
      # into a database friendly form.
      def evolve(object)
        case object
        when QDM::Interval then object.mongoize
        else object
        end
      end
    end
  end
end
