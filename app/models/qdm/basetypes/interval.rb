module QDM
  # Represents an Interval
  class Interval
    attr_reader :low, :high

    # Low and high are required (at minimum).
    def initialize(low, high, lowClosed = true, highClosed = true)
      @low = low
      @high = high
      @lowClosed = lowClosed
      @highClosed = highClosed
    end

    # Converts an object of this instance into a database friendly value.
    def mongoize
      { low: @low, high: @high, lowClosed: @lowClosed, highClosed: @highClosed }
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
        QDM::Interval.new(object[:low], object[:high], object[:lowClosed], object[:highClosed]) if object.is_a?(Hash)
      end

      # Takes any possible object and converts it to how it would be
      # stored in the database.
      def mongoize(object)
        case object
        when nil then nil
        when QDM::Interval then object.mongoize
        when Hash
          object = object.symbolize_keys
          QDM::Interval.new(object[:low], object[:high], object[:lowClosed], object[:highClosed]).mongoize
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
