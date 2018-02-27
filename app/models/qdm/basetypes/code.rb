# Represents a Code
class QDM::Code

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
    { code: @code, code_system: @code_system, descriptor: @descriptor, code_system_oid: @code_system_oid, version: @version }
  end

  class << self

    # Get the object as it was stored in the database, and instantiate
    # this custom class from it.
    #
    # The array elements in demongoize are the same 5 elements used in mongoize, i.e.
    # [ code, code_system, descriptor, code_system_oid, version ].
    def demongoize(object)
      # Sanity check (don't even attempt to demongoize if we're dealing with a nil)
      if object && object.kind_of?(Hash) && object.keys.count == 5
        QDM::Code.new(object[:code], object[:code_system], object[:descriptor], object[:code_system_oid], object[:version])
      end
    end

    # Takes any possible object and converts it to how it would be
    # stored in the database.
    def mongoize(object)
      case object
      when QDM::Code then object.mongoize
      when Hash then QDM::Code.new(object[:code], object[:code_system], object[:descriptor], object[:code_system_oid], object[:version]).mongoize
      else object
      end
    end

    # Converts the object that was supplied to a criteria and converts it
    # into a database friendly form.
    def evolve(object)
      case object
      when QDM::Code then object.mongoize
      else object
      end
    end
  end
end