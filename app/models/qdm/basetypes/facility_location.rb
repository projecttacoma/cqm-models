module QDM
    # Represents a FacilityLocation
    class FacilityLocation
      attr_accessor :code, :locationPeriod, :qdmVersion
  
      # Code and locationPeriod are required (at minimum).
      def initialize(code, locationPeriod, qdmVersion = '5.4')
        @code = code
        @locationPeriod = locationPeriod
        @qdmVersion = qdmVersion
      end
  
      # Converts an object of this instance into a database friendly value.
      def mongoize
        { code: @code, locationPeriod: @locationPeriod, _type: 'QDM::FacilityLocation' }
      end
  
      class << self
        # Get the object as it was stored in the database, and instantiate
        # this custom class from it.
        #
        # The array elements in demongoize are the same 3 elements used in mongoize, i.e.
        # [ code, locationPeriod, qdmVersion ]
        def demongoize(object)
          return nil unless object
          object = object.symbolize_keys
          QDM::FacilityLocation.new(object[:code], object[:locationPeriod], object[:qdmVersion])
        end
  
        # Takes any possible object and converts it to how it would be
        # stored in the database.
        def mongoize(object)
          case object
          when nil then nil
          when QDM::FacilityLocation then object.mongoize
          when Hash
            object = object.symbolize_keys
            QDM::FacilityLocation.new(object[:code], object[:locationPeriod], object[:qdmVersion]).mongoize
          else object
          end
        end
  
        # Converts the object that was supplied to a criteria and converts it
        # into a database friendly form.
        def evolve(object)
          case object
          when QDM::FacilityLocation then object.mongoize
          else object
          end
        end
      end
    end
  end
  