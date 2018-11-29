module QDM
  # ValueSet represents a collection of Concepts, used by the Measures to specify a set of codes for a particular topic
  class ValueSet
    include Mongoid::Document
    field :oid, type: String
    field :display_name, type: String
    field :version, type: String
    field :user_id, type: String # Eventually we need to delete this from bundles when exporting
    field :categories, type: Hash

    index(oid: 1)
    embeds_many :concepts
    index 'concepts.code' => 1
    index 'concepts.code_system' => 1
    index 'concepts.code_system_name' => 1
    index 'bundle_id' => 1
    scope :by_oid, ->(oid) { where(oid: oid) }

    CODE_SYSTEMS = {
      '2.16.840.1.113883.6.1' =>    'LOINC',
      '2.16.840.1.113883.6.96' =>   'SNOMED-CT',
      '2.16.840.1.113883.6.12' =>   'CPT',
      # '2.16.840.1.113883.3.88.12.80.32' => 'CPT', # Encounter Type from C32, a subset of CPT
      '2.16.840.1.113883.6.88' =>   'RxNorm',
      '2.16.840.1.113883.6.103' =>  'ICD-9-CM',
      '2.16.840.1.113883.6.104' =>  'ICD-9-PCS',
      '2.16.840.1.113883.6.4' =>   'ICD-10-PCS',
      '2.16.840.1.113883.6.90' =>   'ICD-10-CM',
      '2.16.840.1.113883.6.14' =>   'HCP',
      '2.16.840.1.113883.6.285' =>   'HCPCS',
      '2.16.840.1.113883.5.2' => 'HL7 Marital Status',
      '2.16.840.1.113883.12.292' => 'CVX',
      '2.16.840.1.113883.5.83' => 'HITSP C80 Observation Status',
      '2.16.840.1.113883.3.26.1.1' => 'NCI Thesaurus',
      '2.16.840.1.113883.3.88.12.80.20' => 'FDA',
      '2.16.840.1.113883.4.9' => 'UNII',
      '2.16.840.1.113883.6.69' => 'NDC',
      '2.16.840.1.113883.5.14' => 'HL7 ActStatus',
      '2.16.840.1.113883.6.259' => 'HL7 Healthcare Service Location',
      '2.16.840.1.113883.12.112' => 'DischargeDisposition',
      '2.16.840.1.113883.5.4' => 'HL7 Act Code',
      '2.16.840.1.113883.1.11.18877' => 'HL7 Relationship Code',
      '2.16.840.1.113883.6.238' => 'CDC Race',
      '2.16.840.1.113883.6.177' => 'NLM MeSH',
      '2.16.840.1.113883.5.1076' => 'Religious Affiliation',
      '2.16.840.1.113883.1.11.19717' => 'HL7 ActNoImmunicationReason',
      '2.16.840.1.113883.3.88.12.80.33' => 'NUBC',
      '2.16.840.1.113883.1.11.78' => 'HL7 Observation Interpretation',
      '2.16.840.1.113883.3.221.5' => 'Source of Payment Typology',
      '2.16.840.1.113883.6.13' => 'CDT',
      '2.16.840.1.113883.18.2' => 'AdministrativeSex'
    }.freeze

    # Provides an Array of Hashes. Each code system gets its own Hash
    # The hash has a key of "set" for the code system name and "values"
    # for the actual code list
    def code_set_map
      codes = []
      concept_pairs = concepts.each_with_object({}) do |concept, memo|
        memo[concept.code_system_name] ||= []
        memo[concept.code_system_name] << concept.code
      end
      concept_pairs.each_pair do |code_set, code_list|
        codes << { 'set' => code_set, 'values' => code_list }
      end

      codes
    end

    def self.load_from_xml(doc)
      doc.root.add_namespace_definition('vs', 'urn:ihe:iti:svs:2008')
      vs_element = doc.at_xpath('/vs:RetrieveValueSetResponse/vs:ValueSet|/vs:RetrieveMultipleValueSetsResponse/vs:DescribedValueSet')
      return unless vs_element
      vs = ValueSet.new(oid: vs_element['ID'], display_name: vs_element['displayName'], version: vs_element['version'])
      vs.concepts = extract_concepts(vs_element)
      vs.categories = extract_categories(vs_element)
      vs
    end

    def self.extract_concepts(vs_element)
      vs_element.xpath('//vs:Concept').collect do |con|
        code_system_name = CODE_SYSTEMS[con['codeSystem']] || con['codeSystemName']
        Concept.new(code: con['code'],
                    code_system_name: code_system_name,
                    code_system_version: con['codeSystemVersion'],
                    display_name: con['displayName'], code_system: con['codeSystem'])
      end
    end

    def self.extract_categories(vs_element)
      category_hash = Hash.new { |h, k| h[k] = [] }
      groups_with_categories = vs_element.xpath("//vs:Group/@ID[../@displayName='CATEGORY']")
      groups_with_categories.each do |group_number|
        measure = vs_element.xpath("//vs:Group[@displayName='CMS eMeasure ID' and @ID='#{group_number}']/vs:Keyword").text
        categories_for_group = vs_element.xpath("//vs:Group[@displayName='CATEGORY' and @ID='#{group_number}']/vs:Keyword")
        categories_for_group.each do |category|
          category_hash[measure] << category.text
        end
      end
      !category_hash.empty? ? category_hash : nil
    end
  end
end
