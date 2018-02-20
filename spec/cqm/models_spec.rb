require 'spec_helper'

RSpec.describe QDM do

  before(:all) do
    # Clear old test models (if they are still there for some reason)
    system 'rm tmp/*.js'
    system 'rm -rf app/models/test'
    system "ruby lib/generate_models.rb modelinfo/qdm-modelinfo-5.3.xml data/oids.json TEST"

    # Create example patients
    patient_a_race = QDM::Code.new('2106-3', 'Race & Ethnicity - CDC', 'White', '2.16.840.1.113883.6.238', '2017.01.26')
    patient_a_ethnicity = QDM::Code.new('2108-9', 'Race & Ethnicity - CDC', 'European', '2.16.840.1.113883.6.238', '2017.01.26')
    patient_a_sex = QDM::Code.new('M', 'Administrative sex (HL7)', 'Male', '2.16.840.1.113883.12.1', '2017.01.26')
    @patient_a = QDM::Patient.new(birth_datetime: 75.years.ago, race: patient_a_race, ethnicity: patient_a_ethnicity, sex: patient_a_sex)

    patient_b_sex = QDM::Code.new('F', 'Administrative sex (HL7)', 'Female', '2.16.840.1.113883.12.1', '2017.01.26')
    @patient_b = QDM::Patient.new(birth_datetime: 75.years.ago, race: patient_a_race, ethnicity: patient_a_ethnicity, sex: patient_b_sex)

    # Create example patient history
    @proceedure_a = QDM::ProcedurePerformed.new(author_datetime: 1.day.ago, codes: [QDM::Code.new('bogus code', 'bogus code system'), QDM::Code.new('bogus code', 'bogus code system')])
    @encounter_a = QDM::EncounterOrder.new(reason: QDM::Code.new('bogus code', 'bogus code system'))
    @medication_a = QDM::MedicationDispensed.new(relevant_period: QDM::Interval.new(1.year.ago, 1.month.ago), dosage: QDM::Quantity.new('1', 'mg'))
  end

  after(:all) do
    # Clear just generated test models
    system 'rm tmp/*.js'
    system 'rm -rf app/models/test'
  end

  it 'patients have patient characteristics' do
    expect(@patient_a.race.code).to eq '2106-3'
    expect(@patient_a.race.descriptor).to eq 'White'
    expect(@patient_a.race.code_system_oid).to eq '2.16.840.1.113883.6.238'
    expect(@patient_a.ethnicity.code).to eq '2108-9'
    expect(@patient_a.ethnicity.descriptor).to eq 'European'
    expect(@patient_a.ethnicity.code_system_oid).to eq '2.16.840.1.113883.6.238'
    expect(@patient_a.sex.code).to eq 'M'
    expect(@patient_a.sex.descriptor).to eq 'Male'
    expect(@patient_a.sex.code_system_oid).to eq '2.16.840.1.113883.12.1'
    expect(@patient_b.sex.code).to eq 'F'
    expect(@patient_b.sex.descriptor).to eq 'Female'
    expect(@patient_b.sex.code_system_oid).to eq '2.16.840.1.113883.12.1'
  end

  it 'datatypes returns attributes using get' do
    expect(@proceedure_a.get('author_datetime')).to be
    expect(@encounter_a.get('reason')).to be
    expect(@medication_a.get('relevant_period')).to be
    expect(@medication_a.get('dosage')).to be
  end

  it 'datatypes returns codes using getCode' do
    debugger
    expect(@proceedure_a.getCode.count).to eq 2
  end

end