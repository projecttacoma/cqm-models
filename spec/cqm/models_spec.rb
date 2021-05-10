require 'spec_helper'

RSpec.describe QDM do
  before(:all) do
    # Clear old test models (if they are still there for some reason)
    system('rm tmp/*.js')
    system('rm -rf app/models/test')
    system('ruby lib/generate_models.rb modelinfo/qdm-modelinfo-5.6.xml data/oids_qdm_5.6.json TEST')
  end

  before(:each) do
    # Create example patients
    @patient_a = CQM::Patient.new(givenNames: %w['Example Patient'], familyName: 'A-eh', bundleId: 'A')
    @patient_a.qdmPatient.birthDatetime = 75.years.ago
    @patient_b = CQM::Patient.new(givenNames: %w['Example Patient'], familyName: 'B-bee', bundleId: 'B')
    @patient_b.qdmPatient.birthDatetime = 35.years.ago
    @patient_c = CQM::Patient.new(givenNames: %w['Example Patient'], familyName: 'C-cee', bundleId: 'C')
    @patient_c.qdmPatient.birthDatetime = 15.years.ago
    @patient_a.save

    # Create example data elements
    @patient_a.qdmPatient.dataElements << QDM::ProcedurePerformed.new(patient: @patient_a, authorDatetime: 1.day.ago, dataElementCodes: [QDM::Code.new('bogus code', 'bogus code system'), QDM::Code.new('bogus code', 'bogus code system')])
    @patient_a.qdmPatient.dataElements << QDM::EncounterOrder.new(patient: @patient_a, reason: QDM::Code.new('bogus code', 'bogus code system'), codeListId: '123.456')
    @patient_a.qdmPatient.dataElements << QDM::MedicationDispensed.new(patient: @patient_a, relevantPeriod: QDM::Interval.new(1.year.ago, 1.month.ago), dosage: QDM::Quantity.new('1', 'mg'))

    @patient_b.qdmPatient.dataElements << QDM::ProcedurePerformed.new(patient: @patient_b, authorDatetime: 1.day.ago, dataElementCodes: [QDM::Code.new('bogus code', 'bogus code system'), QDM::Code.new('bogus code', 'bogus code system')])
    @patient_b.qdmPatient.dataElements << QDM::EncounterOrder.new(patient: @patient_b, reason: QDM::Code.new('bogus code', 'bogus code system'))
    @patient_b.qdmPatient.dataElements << QDM::MedicationDispensed.new(patient: @patient_b, relevantPeriod: QDM::Interval.new(1.year.ago, 1.month.ago), dosage: QDM::Quantity.new('1', 'mg'))

    @patient_c.qdmPatient.dataElements << QDM::ProcedurePerformed.new(patient: @patient_c, authorDatetime: 1.day.ago, dataElementCodes: [QDM::Code.new('bogus code', 'bogus code system'), QDM::Code.new('bogus code', 'bogus code system')])
    @patient_c.qdmPatient.dataElements << QDM::EncounterOrder.new(patient: @patient_c, reason: QDM::Code.new('bogus code', 'bogus code system'))
    @patient_c.qdmPatient.dataElements << QDM::MedicationDispensed.new(patient: @patient_c, relevantPeriod: QDM::Interval.new(1.year.ago, 1.month.ago), dosage: QDM::Quantity.new('1', 'mg'))
    @patient_c.qdmPatient.dataElements << QDM::EncounterPerformed.new(patient: @patient_c, admissionSource: QDM::Code.new('bogus code', 'bogus code system'))
    practitioner = QDM::Practitioner.new(role: QDM::Code.new('foo code', 'foo code system'), specialty: QDM::Code.new('foo code 2', 'foo code system 2'), qualification: QDM::Code.new('foo code 3', 'foo code systems 3'))
    practitioner.identifier = QDM::Identifier.new(namingSystem: 'foo', value: 'foo value')
    @patient_c.qdmPatient.dataElements[3].participant = [practitioner]

    # Create more detailed (and realistic) patient; more useful for testing calculation with
    bd = 75.years.ago
    facility_location1 = QDM::FacilityLocation.new(locationPeriod: QDM::Interval.new(DateTime.new(2012, 2, 29, 4, 0, 0), DateTime.new(2012, 2, 29, 5, 0, 0)))
    facility_location2 = QDM::FacilityLocation.new(locationPeriod: QDM::Interval.new(DateTime.new(2010, 1, 3, 4, 0, 0), DateTime.new(2010, 1, 3, 5, 0, 0)))
    @patient_big = CQM::Patient.new(givenNames: %w['First Middle'], familyName: 'Family', bundleId: '1')
    @patient_big.qdmPatient.birthDatetime = bd
    @patient_big.qdmPatient.dataElements << QDM::PatientCharacteristicBirthdate.new(birthDatetime: bd)
    @patient_big.qdmPatient.dataElements << QDM::PatientCharacteristicExpired.new(expiredDatetime: 2.years.ago)
    @patient_big.qdmPatient.dataElements << QDM::PatientCharacteristicRace.new(dataElementCodes: [QDM::Code.new('2106-3', 'Race & Ethnicity - CDC', 'White', '2.16.840.1.113883.6.238')])
    @patient_big.qdmPatient.dataElements << QDM::PatientCharacteristicSex.new(dataElementCodes: [QDM::Code.new('M', 'Administrative sex (HL7)', 'Male', '2.16.840.1.113883.12.1')])
    @patient_big.qdmPatient.dataElements << QDM::Diagnosis.new(authorDatetime: 3.years.ago, dataElementCodes: [QDM::Code.new('E08.311', 'ICD10CM'), QDM::Code.new('362.01', 'ICD9CM'), QDM::Code.new('4855003', 'SNOMEDCT')])
    @patient_big.qdmPatient.dataElements << QDM::EncounterPerformed.new(authorDatetime: 3.years.ago, relevantPeriod: QDM::Interval.new(3.years.ago, 3.years.ago + 1.hour), dataElementCodes: [QDM::Code.new('SNOMEDCT', '17436001'), QDM::Code.new('99241', 'CPT')], facilityLocations: [facility_location1, facility_location2])
    @patient_big.qdmPatient.dataElements << QDM::CommunicationPerformed.new(authorDatetime: 3.years.ago, dataElementCodes: [QDM::Code.new('SNOMEDCT', '428341000124108')])
    @patient_big.qdmPatient.dataElements << QDM::DiagnosticStudyPerformed.new(authorDatetime: 3.years.ago, relevantPeriod: QDM::Interval.new(3.years.ago, 3.years.ago + 1.hour), dataElementCodes: [QDM::Code.new('LOINC', '32451-7')], facilityLocation: facility_location1)
    @patient_big.qdmPatient.dataElements << QDM::LaboratoryTestPerformed.new(patient: @patient_big, authorDatetime: 3.years.ago, result: DateTime.new(0, 1, 1, 2, 2, 1), relevantPeriod: QDM::Interval.new(3.years.ago, 3.years.ago + 1.hour), dataElementCodes: [QDM::Code.new('LOINC', '34714-6')])
    @patient_big.qdmPatient.dataElements << QDM::CareGoal.new(relevantPeriod: QDM::Interval.new(DateTime.new(2010, 1, 3, 4, 0, 0), DateTime.new(2010, 1, 3, 5, 0, 0)), dataElementCodes: [QDM::Code.new('LOINC', '32451-7')], statusDate: QDM::Date.new(2010, 1, 12))
    @patient_big.qdmPatient.dataElements << QDM::CareGoal.new(relevantPeriod: QDM::Interval.new(DateTime.new(2004, 1, 3, 4, 0, 0), DateTime.new(2004, 1, 3, 5, 0, 0)), dataElementCodes: [QDM::Code.new('LOINC', '32451-7')], statusDate: QDM::Date.new(2004, 2, 29))

    # Patient with some data elements
    bd = 70.years.ago
    facility_location1 = QDM::FacilityLocation.new(locationPeriod: QDM::Interval.new(DateTime.new(2010, 1, 2, 4, 0, 0), DateTime.new(2010, 1, 2, 5, 0, 0)))
    @patient_de1 = CQM::Patient.new(givenNames: %w['First1 Middle1'], familyName: 'Family1', bundleId: '1')
    @patient_de1.qdmPatient.birthDatetime = bd
    @patient_de1.qdmPatient.dataElements << QDM::PatientCharacteristicBirthdate.new(birthDatetime: bd)
    @patient_de1.qdmPatient.dataElements << QDM::Diagnosis.new(authorDatetime: DateTime.new(2010, 1, 1, 4, 0, 0), dataElementCodes: [QDM::Code.new('E08.311', 'ICD10CM'), QDM::Code.new('362.01', 'ICD9CM'), QDM::Code.new('4855003', 'SNOMEDCT')])
    @patient_de1.qdmPatient.dataElements << QDM::EncounterPerformed.new(authorDatetime: DateTime.new(2010, 1, 2, 4, 0, 0), relevantPeriod: QDM::Interval.new(DateTime.new(2010, 1, 2, 4, 0, 0), DateTime.new(2010, 1, 2, 5, 0, 0)), dataElementCodes: [QDM::Code.new('SNOMEDCT', '17436001'), QDM::Code.new('99241', 'CPT')], facilityLocations: [facility_location1])
    @patient_de1.qdmPatient.dataElements << QDM::DiagnosticStudyPerformed.new(authorDatetime: DateTime.new(2010, 1, 3, 4, 0, 0), relevantPeriod: QDM::Interval.new(DateTime.new(2010, 1, 3, 4, 0, 0), DateTime.new(2010, 1, 3, 5, 0, 0)), dataElementCodes: [QDM::Code.new('LOINC', '32451-7')], facilityLocation: facility_location1)
    @patient_de1.qdmPatient.dataElements << QDM::CareGoal.new(relevantPeriod: QDM::Interval.new(DateTime.new(2010, 1, 3, 4, 0, 0), DateTime.new(2010, 1, 3, 5, 0, 0)), dataElementCodes: [QDM::Code.new('LOINC', '32451-7')])

    # Another patient with some data elements
    bd = 20.years.ago
    facility_location2 = QDM::FacilityLocation.new(locationPeriod: QDM::Interval.new(DateTime.new(2010, 1, 3, 4, 0, 0), DateTime.new(2010, 1, 3, 5, 0, 0)))
    @patient_de2 = CQM::Patient.new(givenNames: %w['First2 Middle2'], familyName: 'Family2', bundleId: '1')
    @patient_de2.qdmPatient.birthDatetime = bd
    @patient_de2.qdmPatient.dataElements << QDM::PatientCharacteristicBirthdate.new(birthDatetime: bd)
    @patient_de2.qdmPatient.dataElements << QDM::Diagnosis.new(authorDatetime: DateTime.new(2010, 1, 1, 4, 0, 0), dataElementCodes: [QDM::Code.new('E08.311', 'ICD10CM'), QDM::Code.new('362.01', 'ICD9CM'), QDM::Code.new('4855003', 'SNOMEDCT')])
    @patient_de2.qdmPatient.dataElements << QDM::EncounterPerformed.new(authorDatetime: DateTime.new(2010, 1, 2, 4, 0, 0), relevantPeriod: QDM::Interval.new(DateTime.new(2010, 1, 2, 4, 0, 0), DateTime.new(2010, 1, 2, 5, 0, 0)), dataElementCodes: [QDM::Code.new('SNOMEDCT', '17436001'), QDM::Code.new('99241', 'CPT')], facilityLocations: [facility_location2])
    @patient_de2.qdmPatient.dataElements << QDM::DiagnosticStudyPerformed.new(authorDatetime: DateTime.new(2010, 1, 3, 4, 0, 0), relevantPeriod: QDM::Interval.new(DateTime.new(2010, 1, 3, 4, 0, 0), DateTime.new(2010, 1, 3, 5, 0, 0)), dataElementCodes: [QDM::Code.new('LOINC', '32451-7')], facilityLocation: facility_location2)

    # An individual Result
    @individualResult = CQM::IndividualResult.new
  end

  after(:all) do
    # Clear just generated test models
    system('rm tmp/*.js')
    system('rm -rf app/models/test')
  end

  it 'patient elements have _type when expected' do
    # These are the only three models where _type shouldn't exist
    # Due to conversion to a mongoid document on the backend
    expect(@patient_a.methods.include?(:_type)).to eq false
    expect(@patient_a.qdmPatient.methods.include?(:_type)).to eq false
    expect(@patient_a.qdmPatient.dataElements[0].id.methods.include?(:_type)).to eq false

    expect(@patient_a.qdmPatient.dataElements[0]._type).to eq 'QDM::ProcedurePerformed'
    expect(@patient_a.qdmPatient.dataElements[1]._type).to eq 'QDM::EncounterOrder'
    expect(@patient_big.qdmPatient.dataElements[0]._type).to eq 'QDM::PatientCharacteristicBirthdate'
  end

  it 'patients have patient characteristics' do
    expect(@patient_a.qdmPatient.birthDatetime).to be
    expect(@patient_b.givenNames).to be
    expect(@patient_c.bundleId).to be
    expect(@patient_big.qdmPatient.patient_characteristics.length).to eq 4
  end

  it 'patient dataElements have an Id string' do
    expect(@patient_a.qdmPatient.dataElements[0].id).to be
    expect(@patient_a.qdmPatient.dataElements[0].id).to eq @patient_a.qdmPatient.dataElements[0]._id
  end

  it 'patient dataElements can have codeListId' do
    expect(@patient_a.qdmPatient.dataElements[1].codeListId).to eq '123.456'
  end

  it 'patient still has _type attributes after json conversion' do
    expect(@patient_a.qdmPatient.dataElements[0]._type).to eq('QDM::ProcedurePerformed')
    # JSON conversion for CQM patient
    @patient_a_json = JSON.parse(@patient_a.to_json(except: '_id'))
    expect(@patient_a_json['qdmPatient']['dataElements'].first['_type']).to eq('QDM::ProcedurePerformed')
    # JSON conversion for QDM patient
    @qdm_patient_a_json = JSON.parse(@patient_a.qdmPatient.to_json(except: '_id'))
    expect(@qdm_patient_a_json['dataElements'].first['_type']).to eq('QDM::ProcedurePerformed')
  end

  it 'patients return datatypes that return attributes using get' do
    expect(@patient_a.qdmPatient.get_data_elements('procedure', 'performed').first.get('authorDatetime')).to be
    expect(@patient_a.qdmPatient.get_data_elements('encounter', 'order').first.get('reason')).to be
    expect(@patient_a.qdmPatient.get_data_elements('medication', 'dispensed').first.get('relevantPeriod')).to be
    expect(@patient_a.qdmPatient.get_data_elements('medication').first.get('dosage')).to be
  end

  it 'patient data element helper methods return data elements' do
    expect(@patient_a.qdmPatient.encounters.count).to eq 1
    expect(@patient_b.qdmPatient.medications.count).to eq 1
    expect(@patient_c.qdmPatient.procedures.count).to eq 1
  end

  it 'patients return datatypes return codes using code_system_pairs' do
    expect(@patient_a.qdmPatient.get_data_elements('procedure').first.code_system_pairs.count).to eq 2
  end

  it 'shift patient data elements forward in time' do
    # Shift everything two hours ahead
    @patient_de1.qdmPatient.shift_dates(60 * 60 * 2)

    # Diagnosis authorDatetime should be two hours ahead
    expect(@patient_de1.qdmPatient.conditions.first.authorDatetime.utc.to_s).to include('06:00:00')

    # EncounterPerformed authorDatetime should be two hours ahead
    expect(@patient_de1.qdmPatient.encounters.first.authorDatetime.utc.to_s).to include('06:00:00')

    # EncounterPerformed relevantPeriod high and low should be two hours ahead
    expect(@patient_de1.qdmPatient.encounters.first.relevantPeriod.low.utc.to_s).to include('06:00:00')
    expect(@patient_de1.qdmPatient.encounters.first.relevantPeriod.high.utc.to_s).to include('07:00:00')

    # EncounterPerformed facilityLocation high and low should be two hours ahead
    expect(@patient_de1.qdmPatient.encounters.first.facilityLocations.first['locationPeriod'][:low].utc.to_s).to include('06:00:00')
    expect(@patient_de1.qdmPatient.encounters.first.facilityLocations.first['locationPeriod'][:high].utc.to_s).to include('07:00:00')

    # DiagnosticStudyPerformed authorDatetime should be two hours ahead
    expect(@patient_de1.qdmPatient.diagnostic_studies.first.authorDatetime.utc.to_s).to include('06:00:00')

    # DiagnosticStudyPerformed relevantPeriod high and low should be two hours ahead
    expect(@patient_de1.qdmPatient.diagnostic_studies.first.relevantPeriod.low.utc.to_s).to include('06:00:00')
    expect(@patient_de1.qdmPatient.diagnostic_studies.first.relevantPeriod.high.utc.to_s).to include('07:00:00')

    # DiatnosticStudyPerformed facilityLocation high and low should be two hours ahead
    expect(@patient_de1.qdmPatient.diagnostic_studies.first.facilityLocation['locationPeriod'][:low].utc.to_s).to include('06:00:00')
    expect(@patient_de1.qdmPatient.diagnostic_studies.first.facilityLocation['locationPeriod'][:high].utc.to_s).to include('07:00:00')
  end

  it 'shift patient data elements backwards in time' do
    # Shift everything two hours behind
    @patient_de2.qdmPatient.shift_dates(-(60 * 60 * 2))

    # Diagnosis authorDatetime should be two hours behind
    expect(@patient_de2.qdmPatient.conditions.first.authorDatetime.utc.to_s).to include('02:00:00')

    # EncounterPerformed authorDatetime should be two hours behind
    expect(@patient_de2.qdmPatient.encounters.first.authorDatetime.utc.to_s).to include('02:00:00')

    # EncounterPerformed relevantPeriod high and low should be two hours behind
    expect(@patient_de2.qdmPatient.encounters.first.relevantPeriod.low.utc.to_s).to include('02:00:00')
    expect(@patient_de2.qdmPatient.encounters.first.relevantPeriod.high.utc.to_s).to include('03:00:00')

    # EncounterPerformed facilityLocation high and low should be two hours behind
    expect(@patient_de2.qdmPatient.encounters.first.facilityLocations.first['locationPeriod'][:low].utc.to_s).to include('02:00:00')
    expect(@patient_de2.qdmPatient.encounters.first.facilityLocations.first['locationPeriod'][:high].utc.to_s).to include('03:00:00')

    # DiagnosticStudyPerformed authorDatetime should be two hours behind
    expect(@patient_de2.qdmPatient.diagnostic_studies.first.authorDatetime.utc.to_s).to include('02:00:00')

    # DiagnosticStudyPerformed relevantPeriod high and low should be two hours behind
    expect(@patient_de2.qdmPatient.diagnostic_studies.first.relevantPeriod.low.utc.to_s).to include('02:00:00')
    expect(@patient_de2.qdmPatient.diagnostic_studies.first.relevantPeriod.high.utc.to_s).to include('03:00:00')

    # DiatnosticStudyPerformed facilityLocation high and low should be two hours behind
    expect(@patient_de2.qdmPatient.diagnostic_studies.first.facilityLocation['locationPeriod'][:low].utc.to_s).to include('02:00:00')
    expect(@patient_de2.qdmPatient.diagnostic_studies.first.facilityLocation['locationPeriod'][:high].utc.to_s).to include('03:00:00')
  end

  it 'relatedTo properly links data elements' do
    # Add a link to another data element
    care_goal = @patient_de1.qdmPatient.care_goals.first
    expect(@patient_de1.qdmPatient.dataElements.first.id).to be
    care_goal.relatedTo = []
    care_goal.relatedTo << @patient_de1.qdmPatient.dataElements.first.id
    id = @patient_de1.qdmPatient.dataElements.first.id
    expect(care_goal.relatedTo.first).to eq id
    @patient_de1.save
  end

  it 'entity datatype can be saved correctly' do
    puts @patient_c.qdmPatient.dataElements[3].participant.first['identifier']
    @patient_c.save
    expect(@patient_c.qdmPatient.dataElements[3].participant.first['specialty'][:code]).to eq 'foo code 2'
    expect(@patient_c.qdmPatient.dataElements[3].participant.first['identifier']['value']).to eq 'foo value'
  end

  it 'individualResult has empty observation_values by default' do
    expect(@individualResult.observation_values).to eq []
  end

  it 'shift years forward' do
    year_shift = 2
    @patient_big.qdmPatient.dataElements.each do |data_element|
      data_element.shift_years(year_shift)
    end

    expect(@patient_big.qdmPatient.get_data_elements('encounter').first.get('authorDatetime').utc.to_s).to include(1.years.ago.to_s[0..3])
    expect(@patient_big.qdmPatient.get_data_elements('encounter').first.get('relevantPeriod').low.utc.to_s).to include(1.years.ago.to_s[0..3])
    expect(@patient_big.qdmPatient.get_data_elements('encounter').first.get('relevantPeriod').high.utc.to_s).to include(1.years.ago.to_s[0..3])
    expect(@patient_big.qdmPatient.get_data_elements('encounter').first.get('facilityLocations').first['locationPeriod'][:low].utc.to_s).to include('2014-02-28')
    expect(@patient_big.qdmPatient.get_data_elements('encounter').first.get('facilityLocations').first['locationPeriod'][:high].utc.to_s).to include('2014-02-28')
    expect(@patient_big.qdmPatient.diagnostic_studies.first.facilityLocation.locationPeriod.low.utc.to_s).to include('2014-02-28')
    expect(@patient_big.qdmPatient.diagnostic_studies.first.facilityLocation.locationPeriod.high.utc.to_s).to include('2014-02-28')
    expect(@patient_big.qdmPatient.get_data_elements('laboratory_test').first.get('result').utc.to_s).to include('0000-01-01')
    expect(@patient_big.qdmPatient.get_data_elements('care_goal').first.get('statusDate').year).to eq(2012)
    expect(@patient_big.qdmPatient.get_data_elements('care_goal')[1].get('statusDate').year).to eq(2006)
    expect(@patient_big.qdmPatient.get_data_elements('care_goal')[1].get('statusDate').day).to eq(28)
  end

  it 'shift years backward' do
    year_shift = -2
    @patient_big.qdmPatient.dataElements.each do |data_element|
      data_element.shift_years(year_shift)
    end

    expect(@patient_big.qdmPatient.get_data_elements('encounter').first.get('authorDatetime').utc.to_s).to include(5.years.ago.to_s[0..3])
    expect(@patient_big.qdmPatient.get_data_elements('encounter').first.get('relevantPeriod').low.utc.to_s).to include(5.years.ago.to_s[0..3])
    expect(@patient_big.qdmPatient.get_data_elements('encounter').first.get('relevantPeriod').high.utc.to_s).to include(5.years.ago.to_s[0..3])
    expect(@patient_big.qdmPatient.get_data_elements('encounter').first.get('facilityLocations').first['locationPeriod'][:low].utc.to_s).to include('2010-02-28')
    expect(@patient_big.qdmPatient.get_data_elements('encounter').first.get('facilityLocations').first['locationPeriod'][:high].utc.to_s).to include('2010-02-28')
    expect(@patient_big.qdmPatient.diagnostic_studies.first.facilityLocation.locationPeriod.low.utc.to_s).to include('2010-02-28')
    expect(@patient_big.qdmPatient.diagnostic_studies.first.facilityLocation.locationPeriod.high.utc.to_s).to include('2010-02-28')
    expect(@patient_big.qdmPatient.get_data_elements('laboratory_test').first.get('result').utc.to_s).to include('0000-01-01')
    expect(@patient_big.qdmPatient.get_data_elements('care_goal').first.get('statusDate').year).to eq(2008)
    expect(@patient_big.qdmPatient.get_data_elements('care_goal')[1].get('statusDate').year).to eq(2002)
  end

  it 'shift years too far backward' do
    year_shift = -3000
    begin
      @patient_big.qdmPatient.dataElements.each do |data_element|
        data_element.shift_years(year_shift)
      end
    rescue RangeError => e
      expect(e.message).to eq 'Year was shifted after 9999 or before 0001'
    end
    # Make sure nothing was changed
    expect(@patient_big.qdmPatient.get_data_elements('encounter').first.get('authorDatetime').utc.to_s).to include(3.years.ago.to_s[0..3])
    expect(@patient_big.qdmPatient.get_data_elements('encounter').first.get('relevantPeriod').low.utc.to_s).to include(3.years.ago.to_s[0..3])
    expect(@patient_big.qdmPatient.get_data_elements('encounter').first.get('relevantPeriod').high.utc.to_s).to include(3.years.ago.to_s[0..3])
    expect(@patient_big.qdmPatient.get_data_elements('encounter').first.get('facilityLocations').first['locationPeriod'][:low].utc.to_s).to include('2012-02-29')
    expect(@patient_big.qdmPatient.get_data_elements('encounter').first.get('facilityLocations').first['locationPeriod'][:high].utc.to_s).to include('2012-02-29')
    expect(@patient_big.qdmPatient.diagnostic_studies.first.facilityLocation.locationPeriod.low.utc.to_s).to include('2012-02-29')
    expect(@patient_big.qdmPatient.diagnostic_studies.first.facilityLocation.locationPeriod.high.utc.to_s).to include('2012-02-29')
    expect(@patient_big.qdmPatient.get_data_elements('laboratory_test').first.get('result').utc.to_s).to include('0000-01-01')
    expect(@patient_big.qdmPatient.get_data_elements('care_goal').first.get('statusDate').year).to eq(2010)
    expect(@patient_big.qdmPatient.get_data_elements('care_goal')[1].get('statusDate').year).to eq(2004)
  end

  it 'shift years too far forward' do
    year_shift = 10_000
    begin
      @patient_big.qdmPatient.dataElements.each do |data_element|
        data_element.shift_years(year_shift)
      end
    rescue RangeError => e
      expect(e.message).to eq 'Year was shifted after 9999 or before 0001'
    end

    # Make sure nothing was changed
    expect(@patient_big.qdmPatient.get_data_elements('encounter').first.get('authorDatetime').utc.to_s).to include(3.years.ago.to_s[0..3])
    expect(@patient_big.qdmPatient.get_data_elements('encounter').first.get('relevantPeriod').low.utc.to_s).to include(3.years.ago.to_s[0..3])
    expect(@patient_big.qdmPatient.get_data_elements('encounter').first.get('relevantPeriod').high.utc.to_s).to include(3.years.ago.to_s[0..3])
    expect(@patient_big.qdmPatient.get_data_elements('encounter').first.get('facilityLocations').first['locationPeriod'][:low].utc.to_s).to include('2012-02-29')
    expect(@patient_big.qdmPatient.get_data_elements('encounter').first.get('facilityLocations').first['locationPeriod'][:high].utc.to_s).to include('2012-02-29')
    expect(@patient_big.qdmPatient.diagnostic_studies.first.facilityLocation.locationPeriod.low.utc.to_s).to include('2012-02-29')
    expect(@patient_big.qdmPatient.diagnostic_studies.first.facilityLocation.locationPeriod.high.utc.to_s).to include('2012-02-29')
    expect(@patient_big.qdmPatient.get_data_elements('laboratory_test').first.get('result').utc.to_s).to include('0000-01-01')
    expect(@patient_big.qdmPatient.get_data_elements('care_goal').first.get('statusDate').year).to eq(2010)
    expect(@patient_big.qdmPatient.get_data_elements('care_goal')[1].get('statusDate').year).to eq(2004)
  end

  it 'interval low and high get shifted out of range' do
    patient1 = CQM::Patient.new(givenNames: %w['First Middle'], familyName: 'Family', bundleId: '1')
    patient1.qdmPatient.dataElements << QDM::CareGoal.new(relevantPeriod: QDM::Interval.new(DateTime.new(2, 1, 3, 4, 0, 0), DateTime.new(2010, 1, 3, 5, 0, 0)), dataElementCodes: [QDM::Code.new('LOINC', '32451-7')])

    year_shift = -5
    begin
      patient1.qdmPatient.dataElements.each do |data_element|
        data_element.shift_years(year_shift)
      end
    rescue RangeError => e
      expect(e.message).to eq 'Year was shifted after 9999 or before 0001'
    end

    patient2 = CQM::Patient.new(givenNames: %w['First Middle'], familyName: 'Family', bundleId: '1')
    patient2.qdmPatient.dataElements << QDM::CareGoal.new(relevantPeriod: QDM::Interval.new(DateTime.new(2001, 1, 3, 4, 0, 0), DateTime.new(9998, 1, 3, 5, 0, 0)), dataElementCodes: [QDM::Code.new('LOINC', '32451-7')])

    year_shift = 5
    begin
      patient2.qdmPatient.dataElements.each do |data_element|
        data_element.shift_years(year_shift)
      end
    rescue RangeError => e
      expect(e.message).to eq 'Year was shifted after 9999 or before 0001'
    end
  end
end
