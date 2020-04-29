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
      @low = (@low.utc.to_time + seconds.seconds).to_datetime.new_offset(0) if (@low.is_a? DateTime) || (@low.is_a? Time)
      if (@high.is_a? DateTime) || (@high.is_a? Time)
        @high = (@high.utc.to_time + seconds.seconds).to_datetime.new_offset(0)
        @high = @high.year > 9999 ? @high.change(year: 9999) : @high
      end
      self
    end

    def shift_years(year_shift)
      if (@low.is_a? DateTime) || (@low.is_a? Time)
        raise RangeError, 'Year was shifted after 9999 or before 0001' if @low.year + year_shift < 1 || @low.year + year_shift > 9999

        low_shift = @low.year + year_shift
        @low = if @low.month == 2 && @low.day == 29 && !::Date.leap?(low_shift)
                 @low.change(year: low_shift, day: 28)
               else
                 @low.change(year: low_shift)
               end
      end
      if (@high.is_a? DateTime) || (@high.is_a? Time)
        raise RangeError, 'Year was shifted after 9999 or before 0001' if @high.year + year_shift < 1 || @high.year + year_shift > 9999

        high_shift = @high.year + year_shift
        @high = if @high.month == 2 && @high.day == 29 && !::Date.leap?(high_shift)
                  @high.change(year: high_shift, day: 28)
                else
                  @high.change(year: high_shift)
                end
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
