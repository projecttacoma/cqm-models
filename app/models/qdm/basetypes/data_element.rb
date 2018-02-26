# Represents QDM datatype (parent class of all generated QDM datatype models)
class QDM::DataElement
  include Mongoid::Document
  embedded_in :patient

  # Codes that describe this datatype.
  field :data_element_codes, type: Array, default: []

  # Returns the attribute requested on the datatype.
  def get(attribute)
    self.send(attribute) if self.has_attribute?(attribute)
  end

  # Returns all of the codes on this datatype.
  def getCode
    codes.collect do |code|
      {code: code.code, system: code.code_system}
    end
  end

  # Helper method that returns the codes on this data element as QDM::Code
  # objects.
  def codes
    self.data_element_codes.collect{ |code| QDM::Code.demongoize(code) }
  end

  # Return the Mongo id for this datatype.
  def id
    self._id
  end
end