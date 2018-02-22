# Represents QDM datatype (parent class of all generated QDM datatype models)
class QDM::Datatype
  include Mongoid::Document

  # Codes that describe this datatype.
  field :codes, type: Array

  # Returns the attribute requested on the datatype.
  def get(attribute)
    self.send(attribute) if self.has_attribute?(attribute)
  end

  # Returns all of the codes on this datatype.
  def getCode
    codes.collect do |entry|
      code = QDM::Code.demongoize(entry)
      {code: code.code, system: code.code_system}
    end
  end

  # Return the Mongo id for this datatype.
  def id
    self._id
  end

end