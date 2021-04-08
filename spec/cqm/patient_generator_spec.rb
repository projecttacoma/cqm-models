require 'spec_helper'

RSpec.describe QDM::PatientGeneration do
  it 'single massive patient contains same number of dataElements that are in list of all patients' do
    count = 0
    # Each patient gets 4 charactaristics by default
    patient_characteristics = 4
    stacked_patient = QDM::PatientGeneration.generate_exhaustive_data_element_patients(false, 'qdm-modelinfo-5.6.xml')[0]
    stacked_patients = QDM::PatientGeneration.generate_exhaustive_data_element_patients(true, 'qdm-modelinfo-5.6.xml')
    stacked_patients.each do |patient|
      count += (patient.qdmPatient.dataElements.size - patient_characteristics)
    end
    expect(count).to equal stacked_patient.qdmPatient.dataElements.size - patient_characteristics
  end
end
