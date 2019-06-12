module QDM
  # app/models/qdm/encounter_performed.rb
  class EncounterPerformed < DataElement
    include Mongoid::Document
    embedded_in :patient
    field :authorDatetime, type: DateTime
    field :admissionSource, type: QDM::Code
    field :relevantPeriod, type: QDM::Interval
    field :dischargeDisposition, type: QDM::Code
    field :facilityLocations, type: Array, default: []
    field :diagnoses, type: Array
    field :principalDiagnosis, type: QDM::Code
    field :negationRationale, type: QDM::Code
    field :lengthOfStay, type: QDM::Quantity
    field :qdmTitle, type: String, default: 'Encounter, Performed'
    field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.5'
    field :qdmCategory, type: String, default: 'encounter'
    field :qdmStatus, type: String, default: 'performed'
    field :qdmVersion, type: String, default: '5.4'

    def shift_years(year_shift)
      super
      # This will be used to replaced the current facilityLocations upon shift
      shiftedFacilityLocations = []
      facilityLocations.each do |facility_location|
        # Need to convert to a QDM::FacilityLocation because it is being passed in as a Hash
        shiftedFacilityLocations << QDM::FacilityLocation.new(facility_location).shift_years(year_shift)
      end
      self.facilityLocations = shiftedFacilityLocations
    end
  end
end
