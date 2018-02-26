require 'spec_helper'

RSpec.describe QDM do

  before(:all) do
    # Clear old test models (if they are still there for some reason)
    system 'rm tmp/*.js'
    system 'rm -rf app/models/test'
    system "ruby lib/generate_models.rb modelinfo/qdm-modelinfo-5.3.xml data/oids.json TEST"

    # Create example patients
    @patient_a = QDM::Patient.new(birth_datetime: 75.years.ago)
    @patient_b = QDM::Patient.new(birth_datetime: 35.years.ago)

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
    expect(@patient_a.birth_datetime).to be
    expect(@patient_b.birth_datetime).to be
  end

  it 'datatypes returns attributes using get' do
    expect(@proceedure_a.get('author_datetime')).to be
    expect(@encounter_a.get('reason')).to be
    expect(@medication_a.get('relevant_period')).to be
    expect(@medication_a.get('dosage')).to be
  end

  it 'datatypes returns codes using getCode' do
    expect(@proceedure_a.getCode.count).to eq 2
  end

end