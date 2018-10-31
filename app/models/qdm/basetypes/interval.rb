module QDM
  # Represents an Interval
  class Interval
    attr_accessor :low, :high, :lowClosed, :highClosed

    # Low and high are required (at minimum).
    def initialize(low, high, lowClosed = true, highClosed = true)
      @low = low
      @high = high.is_a?(DateTime) && (high.year > 9999) ? high.change(year: 9999) : high
      @lowClosed = lowClosed
      @highClosed = highClosed
    end

    # Converts an object of this instance into a database friendly value.
    def mongoize
      { low: @low, high: @high, lowClosed: @lowClosed, highClosed: @highClosed, _type: 'QDM::Interval' }
    end

    # Shift dates by the given value.
    # Given value should be in seconds. Positive values shift forward, negative
    # values shift backwards.
    #
    # NOTE: This will only shift if @high and @low are DateTimes.
    def shift_dates(seconds)
      if (@low.is_a? DateTime) || (@low.is_a? Time)
        @low = (@low.utc.to_time + seconds.seconds).to_datetime.new_offset(0)
      end
      if (@high.is_a? DateTime) || (@high.is_a? Time)
        @high = (@high.utc.to_time + seconds.seconds).to_datetime.new_offset(0)
        @high = (@high.year > 9999) ? @high.change(year: 9999) : @high
      end
      self
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
        fix_datetime(object)
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
          fix_datetime(object)
          QDM::Interval.new(object[:low], object[:high], object[:lowClosed], object[:highClosed]).mongoize
        else object
        end
      end

      def fix_datetime(object)
        # Cast to DateTime if it is a string representing a DateTime
        object[:low] = DateTime.parse(object[:low]) if (object[:low].is_a? String) && DateTime.parse(object[:low])
        object[:high] = DateTime.parse(object[:high]) if (object[:high].is_a? String) && DateTime.parse(object[:high])
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
