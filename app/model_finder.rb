module QDM
  class ModelFinder
    @hqmfToOidMap = {
      "2.16.840.1.113883.10.20.28.3.61"=> "PhysicalExamOrder",
      "2.16.840.1.113883.10.20.28.4.130"=> "Participation",
      "2.16.840.1.113883.10.20.28.3.55"=> "PatientCharacteristicSex",
      "2.16.840.1.113883.10.20.28.3.7"=> "CareGoal",
      "2.16.840.1.113883.10.20.28.3.53"=> "PatientCharacteristic",
      "2.16.840.1.113883.10.20.28.3.56"=> "PatientCharacteristicEthnicity",
      "2.16.840.1.113883.10.20.28.3.59"=> "PatientCharacteristicRace",
      "2.16.840.1.113883.10.20.28.3.42"=> "LaboratoryTestPerformed",
      "2.16.840.1.113883.10.20.28.3.116"=> "Symptom",
      "2.16.840.1.113883.10.20.28.3.45"=> "MedicationAdministered",
      "2.16.840.1.113883.10.20.28.3.68"=> "ProcedureRecommended",
      "2.16.840.1.113883.10.20.28.3.5"=> "EncounterPerformed",
      "2.16.840.1.113883.10.20.28.3.110"=> "Diagnosis",
      "2.16.840.1.113883.10.20.28.4.132"=> "CommunicationPerformed",
      "2.16.840.1.113883.10.20.28.3.117"=> "AssessmentPerformed",
      "2.16.840.1.113883.10.20.28.3.6"=> "PatientCharacteristicClinicalTrialParticipant",
      "2.16.840.1.113883.10.20.28.3.15"=> "DeviceOrder",
      "2.16.840.1.113883.10.20.28.3.23"=> "DiagnosticStudyPerformed",
      "2.16.840.1.113883.10.20.28.3.35"=> "InterventionOrder",
      "2.16.840.1.113883.10.20.28.3.111"=> "FamilyHistory",
      "2.16.840.1.113883.10.20.28.3.44"=> "MedicationActive",
      "2.16.840.1.113883.10.20.28.3.41"=> "LaboratoryTestOrder",
      "2.16.840.1.113883.10.20.28.3.22"=> "DiagnosticStudyOrder",
      "2.16.840.1.113883.10.20.28.3.77"=> "SubstanceOrder",
      "2.16.840.1.113883.10.20.28.3.58"=> "PatientCharacteristicPayer",
      "2.16.840.1.113883.10.20.28.3.57"=> "PatientCharacteristicExpired",
      "2.16.840.1.113883.10.20.28.4.131"=> "AssessmentOrder",
      "2.16.840.1.113883.10.20.28.3.118"=> "AssessmentRecommended",
      "2.16.840.1.113883.10.20.28.3.112"=> "ImmunizationAdministered",
      "2.16.840.1.113883.10.20.28.3.73"=> "SubstanceAdministered",
      "2.16.840.1.113883.10.20.28.3.27"=> "EncounterOrder",
      "2.16.840.1.113883.10.20.28.3.28"=> "EncounterRecommended",
      "2.16.840.1.113883.10.20.28.3.67"=> "ProcedurePerformed",
      "2.16.840.1.113883.10.20.28.3.119"=> "AllergyIntolerance",
      "2.16.840.1.113883.10.20.28.3.71"=> "ProviderCharacteristic",
      "22.16.840.1.113883.10.20.28.3.63"=> "PhysicalExamRecommended",
      "2.16.840.1.113883.10.20.28.3.54"=> "PatientCharacteristicBirthdate",
      "2.16.840.1.113883.10.20.28.3.120"=> "AdverseEvent",
      "2.16.840.1.113883.10.20.28.3.16"=> "DeviceRecommended",
      "2.16.840.1.113883.10.20.28.3.13"=> "DeviceApplied",
      "2.16.840.1.113883.10.20.28.3.48"=> "MedicationDischarge",
      "2.16.840.1.113883.10.20.28.3.36"=> "InterventionPerformed",
      "2.16.840.1.113883.10.20.28.3.43"=> "LaboratoryTestRecommended",
      "2.16.840.1.113883.10.20.28.3.49"=> "MedicationDispensed",
      "2.16.840.1.113883.10.20.28.3.24"=> "DiagnosticStudyRecommended",
      "2.16.840.1.113883.10.20.28.3.113"=> "ImmunizationOrder",
      "2.16.840.1.113883.10.20.28.3.52"=> "PatientCareExperience",
      "2.16.840.1.113883.10.20.28.3.70"=> "ProviderCareExperience",
      "2.16.840.1.113883.10.20.28.3.66"=> "ProcedureOrder",
      "2.16.840.1.113883.10.20.28.3.51"=> "MedicationOrder",
      "2.16.840.1.113883.10.20.28.3.78"=> "SubstanceRecommended",
      "2.16.840.1.113883.10.20.28.3.37"=> "InterventionRecommended",
      "2.16.840.1.113883.10.20.28.3.62"=> "PhysicalExamPerformed"
    }

    def self.byHqmfOid(hqmfOid)
      require 'pry'
      binding.pry
    end
  end
end