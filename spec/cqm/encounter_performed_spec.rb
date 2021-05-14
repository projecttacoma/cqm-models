require 'spec_helper'

RSpec.describe QDM::EncounterPerformed do
  it 'persist EncounterPerformed details for a patient' do
    expect do
      @patient = CQM::Patient.new(givenNames: %w['Example Patient'], familyName: 'C-cee', bundleId: 'C')
      @patient.qdmPatient.birthDatetime = 15.years.ago
      encounter_performed = QDM::EncounterPerformed.new(
        'authorDatetime' => '2012-08-21T08:00:00.000+00:00',
        'class' => {
          'code' => '111297003',
          'system' => 'SNOMED-CT'
        },
        'relevantPeriod' => {
          'low' => '2012-08-21T08:00:00.000+00:00',
          'high' => '2012-12-19T08:15:00.000+00:00',
          'lowClosed' => true,
          'highClosed' => true
        },
        'diagnoses' => [
          {
            'code' => '111297002',
            'system' => 'SNOMED-CT'
          }
        ]
      )
      @patient.qdmPatient.dataElements << encounter_performed
      @patient.save!
    end.to_not raise_error
  end
end
