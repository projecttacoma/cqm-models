module QDM
  # app/models/qdm/tacoma/provider.rb
  class Provider
    include Mongoid::Document

    NPI_OID = '2.16.840.1.113883.4.6'.freeze
    TAX_ID_OID = '2.16.840.1.113883.4.2'.freeze
    CCN_OID = '2.16.840.1.113883.4.336'.freeze

    field :specialty, type: String
    field :title, type: String
    field :given_name, type: String
    field :family_name, type: String

    validates_uniqueness_of :npi, allow_blank: true

    embeds_many :addresses
    embeds_many :telecoms
    embeds_many :identifiers, class_name: 'QDM::Id'

    scope :by_npi, ->(an_npi) { where('identifiers.namingSystem' => NPI_OID, 'identifiers.value' => an_npi) }

    def npi=(an_npi)
      cda_id_npi = identifiers.where(namingSystem: NPI_OID).first
      if cda_id_npi
        cda_id_npi.value = an_npi
        cda_id_npi.save!
      else
        identifiers << QDM::Id.new(namingSystem: NPI_OID, value: an_npi)
      end
    end

    def npi
      cda_id_npi = identifiers.where(namingSystem: NPI_OID).first
      cda_id_npi ? cda_id_npi.value : nil
    end

    def tin=(a_tin)
      identifiers << QDM::Id.new(namingSystem: TAX_ID_OID, value: a_tin)
    end

    def tin
      cda_id_tin = identifiers.where(namingSystem: TAX_ID_OID).first
      cda_id_tin ? cda_id_tin.value : nil
    end

    def ccn=(a_ccn)
      cda_id_ccn = identifiers.where(namingSystem: CCN_OID).first
      if cda_id_ccn
        cda_id_ccn.value = a_ccn
        cda_id_ccn.save!
      else
        identifiers << QDM::Id.new(namingSystem: CCN_OID, value: a_ccn)
      end
    end

    def ccn
      cda_id_ccn = identifiers.where(namingSystem: CCN_OID).first
      cda_id_ccn ? cda_id_ccn.value : nil
    end

    # validate the NPI, should be 10 or 15 digits total with the final digit being a
    # checksum using the Luhn algorithm with additional special handling as described in
    # https://www.cms.gov/NationalProvIdentStand/Downloads/NPIcheckdigit.pdf
    def self.valid_npi?(npi)
      return false unless npi
      return false if (npi.length != 10) && (npi.length != 15)
      return false unless npi.gsub(/\d/, '').empty? # npi must be all digits
      return false if (npi.length == 15) && (npi =~ /^80840/).nil? # 15 digit npi must start with 80840

      # checksum is always calculated as if 80840 prefix is present
      npi = '80840' + npi if npi.length == 10

      luhn_checksum(npi[0, 14]) == npi[14]
    end

    def self.luhn_checksum(num)
      double = { '0' => 0, '1' => 2, '2' => 4, '3' => 6, '4' => 8, '5' => 1, '6' => 3, '7' => 5, '8' => 7, '9' => 9 }
      sum = 0
      num.reverse!
      num.split('').each_with_index do |char, i|
        sum += if i.even?
                 double[char]
               else
                 char.to_i
               end
      end
      sum = (9 * sum) % 10

      sum.to_s
    end
  end
  # app/models/qdm/tacoma/provider.rb
  class Address
    include Mongoid::Document
    field :street, type: Array, default: []
    field :city, type: String
    field :state, type: String
    field :zip, type: String
    field :country, type: String
    field :use, type: String
  end
  # app/models/qdm/tacoma/provider.rb
  class Telecom
    include Mongoid::Document
    field :use, type: String
    field :value, type: String
    field :preferred, type: Boolean
  end
end
