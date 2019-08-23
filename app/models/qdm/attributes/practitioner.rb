module QDM
  # app/models/qdm/practitioner.rb
  class Practitioner < Entity
    include Mongoid::Document
    embedded_in :data_element
    field :role, type: QDM::Code
    field :specialty, type: QDM::Code
    field :qualification, type: QDM::Code
  end
end
