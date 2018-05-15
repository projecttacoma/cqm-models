require 'spec_helper'

RSpec.describe QDM do
  before(:all) do
    # Clear old test models (if they are still there for some reason)
    system('rm tmp/*.js')
    system('rm -rf app/models/test')
    system('ruby lib/generate_models.rb modelinfo/qdm-modelinfo-5.3.xml data/oids.json TEST')

    # Create example patients
    @patient_a = QDM::Patient.new(birthDatetime: 75.years.ago, givenNames: %w['Example Patient'], familyName: 'A-eh', bundleId: 'A')
    @patient_b = QDM::Patient.new(birthDatetime: 35.years.ago, givenNames: %w['Example Patient'], familyName: 'B-bee', bundleId: 'B')
    @patient_c = QDM::Patient.new(birthDatetime: 15.years.ago, givenNames: %w['Example Patient'], familyName: 'C-cee', bundleId: 'C')

    # Create example data elements
    @patient_a.dataElements << QDM::ProcedurePerformed.new(patient: @patient_a, authorDatetime: 1.day.ago, dataElementCodes: [QDM::Code.new('bogus code', 'bogus code system'), QDM::Code.new('bogus code', 'bogus code system')])
    @patient_a.dataElements << QDM::EncounterOrder.new(patient: @patient_a, reason: QDM::Code.new('bogus code', 'bogus code system'))
    @patient_a.dataElements << QDM::MedicationDispensed.new(patient: @patient_a, relevantPeriod: QDM::Interval.new(1.year.ago, 1.month.ago), dosage: QDM::Quantity.new('1', 'mg'))

    @patient_b.dataElements << QDM::ProcedurePerformed.new(patient: @patient_b, authorDatetime: 1.day.ago, dataElementCodes: [QDM::Code.new('bogus code', 'bogus code system'), QDM::Code.new('bogus code', 'bogus code system')])
    @patient_b.dataElements << QDM::EncounterOrder.new(patient: @patient_b, reason: QDM::Code.new('bogus code', 'bogus code system'))
    @patient_b.dataElements << QDM::MedicationDispensed.new(patient: @patient_b, relevantPeriod: QDM::Interval.new(1.year.ago, 1.month.ago), dosage: QDM::Quantity.new('1', 'mg'))

    @patient_c.dataElements << QDM::ProcedurePerformed.new(patient: @patient_c, authorDatetime: 1.day.ago, dataElementCodes: [QDM::Code.new('bogus code', 'bogus code system'), QDM::Code.new('bogus code', 'bogus code system')])
    @patient_c.dataElements << QDM::EncounterOrder.new(patient: @patient_c, reason: QDM::Code.new('bogus code', 'bogus code system'))
    @patient_c.dataElements << QDM::MedicationDispensed.new(patient: @patient_c, relevantPeriod: QDM::Interval.new(1.year.ago, 1.month.ago), dosage: QDM::Quantity.new('1', 'mg'))

    # Create more detailed (and relatistic) patient; more useful for testing calculation with
    bd = 75.years.ago
    @patient_big = QDM::Patient.new(birthDatetime: bd, givenNames: %w['First Middle'], familyName: 'Family', bundleId: '1')
    @patient_big.dataElements << QDM::PatientCharacteristicBirthdate.new(birthDatetime: bd)
    @patient_big.dataElements << QDM::PatientCharacteristicExpired.new(expiredDatetime: 2.years.ago)
    @patient_big.dataElements << QDM::PatientCharacteristicRace.new(dataElementCodes: [QDM::Code.new('2106-3', 'Race & Ethnicity - CDC', 'White', '2.16.840.1.113883.6.238')])
    @patient_big.dataElements << QDM::PatientCharacteristicSex.new(dataElementCodes: [QDM::Code.new('M', 'Administrative sex (HL7)', 'Male', '2.16.840.1.113883.12.1')])
    @patient_big.dataElements << QDM::Diagnosis.new(authorDatetime: 3.years.ago, dataElementCodes: [QDM::Code.new('E08.311', 'ICD-10-CM'), QDM::Code.new('362.01', 'ICD-9-CM'), QDM::Code.new('4855003', 'SNOMED-CT')])
    @patient_big.dataElements << QDM::EncounterPerformed.new(authorDatetime: 3.years.ago, relevantPeriod: QDM::Interval.new(3.years.ago, 3.years.ago + 1.hour), principalDiagnosis: QDM::Code.new('SNOMED-CT', '419099009'), dataElementCodes: [QDM::Code.new('SNOMED-CT', '17436001'), QDM::Code.new('99241', 'CPT')])
    @patient_big.dataElements << QDM::CommunicationFromProviderToPatient.new(authorDatetime: 3.years.ago, dataElementCodes: [QDM::Code.new('SNOMED-CT', '428341000124108')])
    @patient_big.dataElements << QDM::DiagnosticStudyPerformed.new(authorDatetime: 3.years.ago, relevantPeriod: QDM::Interval.new(3.years.ago, 3.years.ago + 1.hour), dataElementCodes: [QDM::Code.new('LOINC', '32451-7')])

    # Patient with some data elements
    bd = 70.years.ago
    @patient_de1 = QDM::Patient.new(birthDatetime: bd, givenNames: %w['First1 Middle1'], familyName: 'Family1', bundleId: '1')
    @patient_de1.dataElements << QDM::Diagnosis.new(authorDatetime: DateTime.new(2010, 1, 1, 4, 0, 0), dataElementCodes: [QDM::Code.new('E08.311', 'ICD-10-CM'), QDM::Code.new('362.01', 'ICD-9-CM'), QDM::Code.new('4855003', 'SNOMED-CT')])
    @patient_de1.dataElements << QDM::EncounterPerformed.new(authorDatetime: DateTime.new(2010, 1, 2, 4, 0, 0), relevantPeriod: QDM::Interval.new(DateTime.new(2010, 1, 2, 4, 0, 0), DateTime.new(2010, 1, 2, 5, 0, 0)), principalDiagnosis: QDM::Code.new('SNOMED-CT', '419099009'), dataElementCodes: [QDM::Code.new('SNOMED-CT', '17436001'), QDM::Code.new('99241', 'CPT')])
    @patient_de1.dataElements << QDM::DiagnosticStudyPerformed.new(authorDatetime: DateTime.new(2010, 1, 3, 4, 0, 0), relevantPeriod: QDM::Interval.new(DateTime.new(2010, 1, 3, 4, 0, 0), DateTime.new(2010, 1, 3, 5, 0, 0)), dataElementCodes: [QDM::Code.new('LOINC', '32451-7')])

    # Another patient with some data elements
    bd = 20.years.ago
    @patient_de2 = QDM::Patient.new(birthDatetime: bd, givenNames: %w['First2 Middle2'], familyName: 'Family2', bundleId: '1')
    @patient_de2.dataElements << QDM::Diagnosis.new(authorDatetime: DateTime.new(2010, 1, 1, 4, 0, 0), dataElementCodes: [QDM::Code.new('E08.311', 'ICD-10-CM'), QDM::Code.new('362.01', 'ICD-9-CM'), QDM::Code.new('4855003', 'SNOMED-CT')])
    @patient_de2.dataElements << QDM::EncounterPerformed.new(authorDatetime: DateTime.new(2010, 1, 2, 4, 0, 0), relevantPeriod: QDM::Interval.new(DateTime.new(2010, 1, 2, 4, 0, 0), DateTime.new(2010, 1, 2, 5, 0, 0)), principalDiagnosis: QDM::Code.new('SNOMED-CT', '419099009'), dataElementCodes: [QDM::Code.new('SNOMED-CT', '17436001'), QDM::Code.new('99241', 'CPT')])
    @patient_de2.dataElements << QDM::DiagnosticStudyPerformed.new(authorDatetime: DateTime.new(2010, 1, 3, 4, 0, 0), relevantPeriod: QDM::Interval.new(DateTime.new(2010, 1, 3, 4, 0, 0), DateTime.new(2010, 1, 3, 5, 0, 0)), dataElementCodes: [QDM::Code.new('LOINC', '32451-7')])
  end

  after(:all) do
    # Clear just generated test models
    system('rm tmp/*.js')
    system('rm -rf app/models/test')
  end

  it 'patients have patient characteristics' do
    expect(@patient_a.birthDatetime).to be
    expect(@patient_b.givenNames).to be
    expect(@patient_c.bundleId).to be
  end

  it 'patients return datatypes that return attributes using get' do
    expect(@patient_a.get_data_elements('procedure', 'performed').first.get('authorDatetime')).to be
    expect(@patient_a.get_data_elements('encounter', 'order').first.get('reason')).to be
    expect(@patient_a.get_data_elements('medication', 'dispensed').first.get('relevantPeriod')).to be
    expect(@patient_a.get_data_elements('medication').first.get('dosage')).to be
  end

  it 'patient data element helper methods return data elements' do
    expect(@patient_a.encounters.count).to eq 1
    expect(@patient_b.medications.count).to eq 1
    expect(@patient_c.procedures.count).to eq 1
  end

  it 'patients return datatypes return codes using code_system_pairs' do
    expect(@patient_a.get_data_elements('procedure').first.code_system_pairs.count).to eq 2
  end

  it 'shift patient data elements forward in time' do
    # Shift everything two hours ahead
    @patient_de1.shift_dates(60 * 60 * 2)

    # Diagnosis authorDatetime should be two hours ahead
    expect(@patient_de1.conditions.first.authorDatetime.utc.to_s).to include('06:00:00')

    # EncounterPerformed authorDatetime should be two hours ahead
    expect(@patient_de1.encounters.first.authorDatetime.utc.to_s).to include('06:00:00')

    # EncounterPerformed relevantPeriod high and low should be two hours ahead
    expect(@patient_de1.encounters.first.relevantPeriod.low.utc.to_s).to include('06:00:00')
    expect(@patient_de1.encounters.first.relevantPeriod.high.utc.to_s).to include('07:00:00')

    # DiagnosticStudyPerformed authorDatetime should be two hours ahead
    expect(@patient_de1.diagnostic_studies.first.authorDatetime.utc.to_s).to include('06:00:00')

    # DiagnosticStudyPerformed relevantPeriod high and low should be two hours ahead
    expect(@patient_de1.diagnostic_studies.first.relevantPeriod.low.utc.to_s).to include('06:00:00')
    expect(@patient_de1.diagnostic_studies.first.relevantPeriod.high.utc.to_s).to include('07:00:00')
  end

  it 'shift patient data elements backwards in time' do
    # Shift everything two hours behind
    @patient_de2.shift_dates(-(60 * 60 * 2))

    # Diagnosis authorDatetime should be two hours behind
    expect(@patient_de2.conditions.first.authorDatetime.utc.to_s).to include('02:00:00')

    # EncounterPerformed authorDatetime should be two hours behind
    expect(@patient_de2.encounters.first.authorDatetime.utc.to_s).to include('02:00:00')

    # EncounterPerformed relevantPeriod high and low should be two hours behind
    expect(@patient_de2.encounters.first.relevantPeriod.low.utc.to_s).to include('02:00:00')
    expect(@patient_de2.encounters.first.relevantPeriod.high.utc.to_s).to include('03:00:00')

    # DiagnosticStudyPerformed authorDatetime should be two hours behind
    expect(@patient_de2.diagnostic_studies.first.authorDatetime.utc.to_s).to include('02:00:00')

    # DiagnosticStudyPerformed relevantPeriod high and low should be two hours behind
    expect(@patient_de2.diagnostic_studies.first.relevantPeriod.low.utc.to_s).to include('02:00:00')
    expect(@patient_de2.diagnostic_studies.first.relevantPeriod.high.utc.to_s).to include('03:00:00')
  end
end
