require 'spec_helper'

RSpec.describe QDM do

  before(:all) do
    # Clear old test models (if they are still there for some reason)
    system 'rm tmp/*.js'
    system 'rm -rf app/models/test'
    system "ruby lib/generate_models.rb modelinfo/qdm-modelinfo-5.3.xml data/oids.json TEST"

    # Create example patients
    @patient_a = QDM::Patient.new(birth_datetime: 75.years.ago, given_names: ['Example', 'Patient'], family_name: 'A-eh', bundle_id: 'A')
    @patient_b = QDM::Patient.new(birth_datetime: 35.years.ago, given_names: ['Example', 'Patient'], family_name: 'B-bee', bundle_id: 'B')
    @patient_c = QDM::Patient.new(birth_datetime: 15.years.ago, given_names: ['Example', 'Patient'], family_name: 'C-cee', bundle_id: 'C')

    # Create example data elements
    @patient_a.data_elements << QDM::ProcedurePerformed.new(patient: @patient_a, author_datetime: 1.day.ago, data_element_codes: [QDM::Code.new('bogus code', 'bogus code system'), QDM::Code.new('bogus code', 'bogus code system')])
    @patient_a.data_elements << QDM::EncounterOrder.new(patient: @patient_a, reason: QDM::Code.new('bogus code', 'bogus code system'))
    @patient_a.data_elements << QDM::MedicationDispensed.new(patient: @patient_a, relevant_period: QDM::Interval.new(1.year.ago, 1.month.ago), dosage: QDM::Quantity.new('1', 'mg'))

    @patient_b.data_elements << QDM::ProcedurePerformed.new(patient: @patient_b, author_datetime: 1.day.ago, data_element_codes: [QDM::Code.new('bogus code', 'bogus code system'), QDM::Code.new('bogus code', 'bogus code system')])
    @patient_b.data_elements << QDM::EncounterOrder.new(patient: @patient_b, reason: QDM::Code.new('bogus code', 'bogus code system'))
    @patient_b.data_elements << QDM::MedicationDispensed.new(patient: @patient_b, relevant_period: QDM::Interval.new(1.year.ago, 1.month.ago), dosage: QDM::Quantity.new('1', 'mg'))

    @patient_c.data_elements << QDM::ProcedurePerformed.new(patient: @patient_c, author_datetime: 1.day.ago, data_element_codes: [QDM::Code.new('bogus code', 'bogus code system'), QDM::Code.new('bogus code', 'bogus code system')])
    @patient_c.data_elements << QDM::EncounterOrder.new(patient: @patient_c, reason: QDM::Code.new('bogus code', 'bogus code system'))
    @patient_c.data_elements << QDM::MedicationDispensed.new(patient: @patient_c, relevant_period: QDM::Interval.new(1.year.ago, 1.month.ago), dosage: QDM::Quantity.new('1', 'mg'))

    # Create more detailed (and relatistic) patient; more useful for testing calculation with
    bd = 75.years.ago
    @patient_big = QDM::Patient.new(birth_datetime: bd, given_names: ['First', 'Middle'], family_name: 'Family', bundle_id: '1')
    @patient_big.data_elements << QDM::PatientCharacteristicBirthdate.new(birth_datetime: bd)
    @patient_big.data_elements << QDM::PatientCharacteristicExpired.new(expired_datetime: 2.years.ago)
    @patient_big.data_elements << QDM::PatientCharacteristicRace.new(data_element_codes: [QDM::Code.new('2106-3', 'Race & Ethnicity - CDC', 'White', '2.16.840.1.113883.6.238')])
    @patient_big.data_elements << QDM::PatientCharacteristicSex.new(data_element_codes: [QDM::Code.new('M', 'Administrative sex (HL7)', 'Male', '2.16.840.1.113883.12.1')])
    @patient_big.data_elements << QDM::Diagnosis.new(author_datetime: 3.years.ago, data_element_codes: [QDM::Code.new('E08.311', 'ICD-10-CM'), QDM::Code.new('362.01', 'ICD-9-CM'), QDM::Code.new('4855003', 'SNOMED-CT')])
    @patient_big.data_elements << QDM::EncounterPerformed.new(author_datetime: 3.years.ago, relevant_period: QDM::Interval.new(3.years.ago, 3.years.ago + 1.hour), principal_diagnosis: QDM::Code.new('SNOMED-CT', '419099009'), data_element_codes: [QDM::Code.new('SNOMED-CT', '17436001'), QDM::Code.new('99241', 'CPT')])
    @patient_big.data_elements << QDM::CommunicationFromProviderToPatient.new(author_datetime: 3.years.ago, data_element_codes: [QDM::Code.new('SNOMED-CT', '428341000124108')])
    @patient_big.data_elements << QDM::DiagnosticStudyPerformed.new(author_datetime: 3.years.ago, relevant_period: QDM::Interval.new(3.years.ago, 3.years.ago + 1.hour), data_element_codes: [QDM::Code.new('LOINC', '32451-7')])
  end

  after(:all) do
    # Clear just generated test models
    system 'rm tmp/*.js'
    system 'rm -rf app/models/test'
  end

  it 'patients have patient characteristics' do
    expect(@patient_a.birth_datetime).to be
    expect(@patient_b.given_names).to be
    expect(@patient_c.bundle_id).to be
  end

  it 'patients return datatypes that return attributes using get' do
    expect(@patient_a.get_data_elements('procedure', 'performed').first.get('author_datetime')).to be
    expect(@patient_a.get_data_elements('encounter', 'order').first.get('reason')).to be
    expect(@patient_a.get_data_elements('medication', 'dispensed').first.get('relevant_period')).to be
    expect(@patient_a.get_data_elements('medication').first.get('dosage')).to be
  end

  it 'patient data element helper methods return data elements' do
    expect(@patient_a.encounters.count).to eq 1
    expect(@patient_b.medications.count).to eq 1
    expect(@patient_c.procedures.count).to eq 1
  end

  it 'patients return datatypes return codes using getCode' do
    expect(@patient_a.get_data_elements('procedure').first.getCode.count).to eq 2
  end

end