module QDM
    # Represents a Component
    class Component
      attr_accessor :code, :result, :qdmVersion
  
      # Code and result are required (at minimum).
      def initialize(code, result, qdmVersion = '5.4')
        @code = code
        @result = result
        @qdmVersion = qdmVersion
      end
  
      # Converts an object of this instance into a database friendly value.
      def mongoize
        { code: @code, result: @result, _type: 'QDM::Component' }
      end
  
      class << self
        # Get the object as it was stored in the database, and instantiate
        # this custom class from it.
        #
        # The array elements in demongoize are the same 3 elements used in mongoize, i.e.
        # [ code, result, qdmVersion ]
        def demongoize(object)
          return nil unless object
          object = object.symbolize_keys
          QDM::Component.new(object[:code], object[:result], object[:qdmVersion])
        end
  
        # Takes any possible object and converts it to how it would be
        # stored in the database.
        def mongoize(object)
          case object
          when nil then nil
          when QDM::Component then object.mongoize
          when Hash
            object = object.symbolize_keys
            QDM::Component.new(object[:code], object[:result], object[:qdmVersion]).mongoize
          else object
          end
        end
  
        # Converts the object that was supplied to a criteria and converts it
        # into a database friendly form.
        def evolve(object)
          case object
          when QDM::Component then object.mongoize
          else object
          end
        end
      end
    end
  end
  