class Quantity

  attr_reader :value, :unit

  # Code and code system are required (at minimum).
  def initialize(value, unit)
    @value = value
    @unit = unit
  end

  # Converts an object of this instance into a database friendly value.
  def mongoize
    [ value, unit ]
  end

  class << self

    # Get the object as it was stored in the database, and instantiate
    # this custom class from it.
    def demongoize(object)
      Quantity.new(object[0], object[1])
    end

    # Takes any possible object and converts it to how it would be
    # stored in the database.
    def mongoize(object)
      case object
      when Quantity then object.mongoize
      when Hash then Quantity.new(object[:value], object[:unit]).mongoize
      else object
      end
    end

    # Converts the object that was supplied to a criteria and converts it
    # into a database friendly form.
    def evolve(object)
      case object
      when Quantity then object.mongoize
      else object
      end
    end
  end
end