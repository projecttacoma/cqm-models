module QDM
  # app/models/qdm/organization.rb
  class Organization < Entity
    include Mongoid::Document
    embedded_in :data_element
    field :type, type: QDM::Code
  end
end
