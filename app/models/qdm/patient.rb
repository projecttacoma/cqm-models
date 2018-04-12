module QDM
  # app/models/qdm/patient.rb
  class Patient < DataElement
    include Mongoid::Document
    field :birthDatetime, type: DateTime
    field :qdmVersion, type: String, default: '5.3'
    field :givenNames, type: Array
    field :familyName, type: String
    field :bundleId, type: String

    # These are the "data criteria", or QDM datatype elements that exist on a
    # patient.
    embeds_many :dataElements

    # This field is for application specific information only. If both Bonnie
    # Cypress use a common field, it should be made a field on this model,
    # and not put into extendedData.
    field :extendedData, type: Hash

    # Returns an array of elements that exist on this patient, that
    # match the given HQMF data criteria OID.
    def get_by_hqmfOid(hqmfOid)
      data_elements.where(hqmfOid: hqmfOid) || []
    end

    # Returns an array of elements that exist on this patient, that
    # match the given QRDA data criteria OID.
    def get_by_qrdaOid(qrdaOid)
      dataElements.where(qrdaOid: qrdaOid) || []
    end

    # Returns an array of elements that exist on this patient. Optionally
    # takes a category and/or, which returns all elements of that QDM
    # category. Example: patient.get_dataElements('encounters')
    # will return all Encounter QDM data types active on the patient.
    def get_dataElements(category = nil, status = nil)
      if category && status
        dataElements.where(category: category, qdmStatus: status) || []
      elsif category
        dataElements.where(category: category) || []
      else
        dataElements || []
      end
    end

    # Helper method; returns adverseEvent data element types on this patient.
    def adverseEvents
      get_dataElements('adverseEvent')
    end

    # Helper method; returns allergy data element types on this patient.
    def allergies
      get_dataElements('allergy')
    end

    # Helper method; returns assessment data element types on this patient.
    def assessments
      get_dataElements('assessment')
    end

    # Helper method; returns careExperience data element types on this patient.
    def careExperiences
      get_dataElements('careExperience')
    end

    # Helper method; returns careGoal data element types on this patient.
    def careGoals
      get_dataElements('careGoal')
    end

    # Helper method; returns communication data element types on this patient.
    def communications
      get_dataElements('communication')
    end

    # Helper method; returns condition data element types on this patient.
    def conditions
      get_dataElements('condition')
    end

    # Helper method; returns device data element types on this patient.
    def devices
      get_dataElements('device')
    end

    # Helper method; returns diagnosticStudy data element types on this patient.
    def diagnosticStudies
      get_dataElements('diagnosticStudy')
    end

    # Helper method; returns encounter data element types on this patient.
    def encounters
      get_dataElements('encounter')
    end

    # Helper method; returns familyHistory data element types on this patient.
    def familyHistory
      get_dataElements('familyHistory')
    end

    # Helper method; returns functionalStatus data element types on this patient.
    def functionalStatuses
      get_dataElements('functionalStatus')
    end

    # Helper method; returns immunization data element types on this patient.
    def immunizations
      get_dataElements('immunization')
    end

    # Helper method; returns intervention data element types on this patient.
    def interventions
      get_dataElements('intervention')
    end

    # Helper method; returns laboratoryTest data element types on this patient.
    def laboratoryTests
      get_dataElements('laboratoryTest')
    end

    # Helper method; returns medicalEquipment data element types on this patient.
    def medicalEquipment
      get_dataElements('medicalEquipment')
    end

    # Helper method; returns medication data element types on this patient.
    def medications
      get_dataElements('medication')
    end

    # Helper method; returns physicalExam data element types on this patient.
    def physical_exams
      get_dataElements('physicalExam')
    end

    # Helper method; returns preference data element types on this patient.
    def preferences
      get_dataElements('preference')
    end

    # Helper method; returns providerCharacteristic data element types on this patient.
    def providerCharacteristics
      get_dataElements('providerCharacteristic')
    end

    # Helper method; returns procedure data element types on this patient.
    def procedures
      get_dataElements('procedure')
    end

    # Helper method; returns result data element types on this patient.
    def results
      get_dataElements('result')
    end

    # Helper method; returns riskCategoryAssessment data element types on this patient.
    def riskCategoryAssessments
      get_dataElements('riskCategoryAssessment')
    end

    # Helper method; returns socialHistory data element types on this patient.
    def socialHistory
      get_dataElements('socialHistory')
    end

    # Helper method; returns substance data element types on this patient.
    def substances
      get_dataElements('substance')
    end

    # Helper method; returns symptom data element types on this patient.
    def symptoms
      get_dataElements('symptom')
    end

    # Helper method; returns systemCharacteristic data element types on this patient.
    def systemCharacteristics
      get_dataElements('systemCharacteristic')
    end

    # Helper method; returns transfer data element types on this patient.
    def transfers
      get_dataElements('transfer')
    end

    # Helper method; returns vitalSign data element types on this patient.
    def vitalSigns
      get_dataElements('vitalSign')
    end
  end
end
