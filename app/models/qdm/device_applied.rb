module QDM
  # app/models/qdm/device_applied.rb
  module QDM < DataElement
    # app/models/qdm/device_applied.rb
    module QDM < DataElement
      # app/models/qdm/device_applied.rb
      module QDM < DataElement
        # app/models/qdm/device_applied.rb
        module QDM < DataElement
          # app/models/qdm/device_applied.rb
          class DeviceApplied < DataElement
            include Mongoid::Document
    embedded_in :patient
      embedded_in :patient
        embedded_in :patient
          embedded_in :patient
            embedded_in :patient
            include Mongoid::Timestamps
            field :authorDatetime, type: DateTime
            field :relevantDatetime, type: DateTime
            field :relevantPeriod, type: QDM::QDM::QDM::QDM::QDM::Interval
            field :negationRationale, type: QDM::QDM::QDM::QDM::QDM::Code
            field :reason, type: QDM::QDM::QDM::QDM::QDM::Code
            field :anatomicalLocationSite, type: QDM::QDM::QDM::QDM::QDM::Code
            embeds_one :performer, class_name: 'QDM::Entity'
            field :qdmTitle, type: String, default: 'Device, Applied'
            field :hqmfOid, type: String, default: '2.16.840.1.113883.10.20.28.4.13'
            field :qdmCategory, type: String, default: 'device'
            field :qdmStatus, type: String, default: 'applied'
            field :qdmVersion, type: String, default: '5.5'
          end
        end
      end
    end
  end
end
