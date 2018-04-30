module QDM
  # Represents a Code
  class Code
    attr_accessor :code, :codeSystem, :descriptor, :codeSystemOid, :version

    # Code and code system are required (at minimum).
    def initialize(code, codeSystem, descriptor = nil, codeSystemOid = nil, version = nil)
      @code = code
      @codeSystem = codeSystem
      @descriptor = descriptor
      @codeSystemOid = codeSystemOid
      @version = version
    end

    # Converts an object of this instance into a database friendly value.
    def mongoize
      { code: @code, codeSystem: @codeSystem, descriptor: @descriptor, codeSystemOid: @codeSystemOid, version: @version }
    end

    class << self
      # Get the object as it was stored in the database, and instantiate
      # this custom class from it.
      #
      # The array elements in demongoize are the same 5 elements used in mongoize, i.e.
      # [ code, codeSystem, descriptor, codeSystemOid, version ].
      def demongoize(object)
        return nil unless object
        object = object.symbolize_keys
        QDM::Code.new(object[:code], object[:codeSystem], object[:descriptor], object[:codeSystemOid], object[:version])
      end

      # Takes any possible object and converts it to how it would be
      # stored in the database.
      def mongoize(object)
        case object
        when nil then nil
        when QDM::Code then object.mongoize
        when Hash
          object = object.symbolize_keys
          codeSystem = object[:system] ? object[:system] : object[:codeSystem]
          QDM::Code.new(object[:code], codeSystem, object[:descriptor], object[:codeSystemOid], object[:version]).mongoize
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
end
