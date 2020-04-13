module QDM
  # Represents a QDM/CQL Date
  class Date
    attr_accessor :year, :month, :day

    def initialize(year = nil, month = nil, day = nil)
      @year = year
      @month = month
      @day = day
    end

    # Converts an object of this instance into a database friendly value.
    def mongoize
      "#{format('%04d', year)}-#{format('%02d', month)}-#{format('%02d', day)}"
    end

    class << self
      # Get the string as it was stored in the database, and instantiate
      # this custom class from it.
      def demongoize(date_str)
        return nil unless date_str

        year = date_str[0..3].to_i
        month = date_str[5..6].to_i
        day = date_str[8..10].to_i
        QDM::Date.new(year, month, day)
      end

      # Converts the object that was supplied to a criteria and converts it
      # into a database friendly form.
      def evolve(object)
        case object
        when QDM::Date then object.mongoize
        else object
        end
      end
    end
  end
end
