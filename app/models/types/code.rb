class Code

  attr_reader :code, :code_system, :descriptor, :code_system_oid, :version

  # Code and code system are required (at minimum).
  def initialize(code, code_system, descriptor=nil, code_system_oid=nil, version=nil)
    @code = code
    @code_system = code_system
    @descriptor = descriptor
    @code_system_oid = code_system_oid
    @version = version
  end

  # Converts an object of this instance into a database friendly value.
  def mongoize
    [ code, code_system, descriptor, code_system_oid, version ]
  end

  class << self

    # Get the object as it was stored in the database, and instantiate
    # this custom class from it.
    #
    # The array elements in demongoize are the same 5 elements used in mongoize, i.e.
    # [ code, code_system, descriptor, code_system_oid, version ].
    def demongoize(object)
      Code.new(object[0], object[1], object[2], object[3], object[4])
    end

    # Takes any possible object and converts it to how it would be
    # stored in the database.
    def mongoize(object)
      case object
      when Code then object.mongoize
      when Hash then Code.new(object[:code], object[:code_system], object[:descriptor], object[:code_system_oid], object[:version]).mongoize
      else object
      end
    end

    # Converts the object that was supplied to a criteria and converts it
    # into a database friendly form.
    def evolve(object)
      case object
      when Code then object.mongoize
      else object
      end
    end
  end
end