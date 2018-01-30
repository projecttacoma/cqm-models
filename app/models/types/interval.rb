class Interval

  attr_reader :lt, :gt

  # Code and code system are required (at minimum).
  def initialize(lt, gt)
    @lt = lt
    @gt = gt
  end

  # Converts an object of this instance into a database friendly value.
  def mongoize
    [ lt, gt ]
  end

  class << self

    # Get the object as it was stored in the database, and instantiate
    # this custom class from it.
    #
    # The array elements in demongoize are the same 5 elements used in mongoize, i.e.
    # [ lt, gt ].
    def demongoize(object)
      Interval.new(object[0], object[1])
    end

    # Takes any possible object and converts it to how it would be
    # stored in the database.
    def mongoize(object)
      case object
      when Interval then object.mongoize
      when Hash then Interval.new(object[:lt], object[:gt]).mongoize
      else object
      end
    end

    # Converts the object that was supplied to a criteria and converts it
    # into a database friendly form.
    def evolve(object)
      case object
      when Interval then object.mongoize
      else object
      end
    end
  end
end