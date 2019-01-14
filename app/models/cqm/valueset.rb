module CQM
  # ValueSet represents a collection of Concepts, used by the Measures to specify a set of codes for a particular topic
  class ValueSet
    include Mongoid::Document
    field :oid, type: String
    field :display_name, type: String
    field :version, type: String

    index oid: 1

    embeds_many :concepts

    scope :by_oid, ->(oid) { where(oid: oid) }

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
      vs
    end

    def self.extract_concepts(vs_element)
      vs_element.xpath('//vs:Concept').collect do |con|
        code_system_name = HealthDataStandards::Util::CodeSystemHelper::CODE_SYSTEMS[con['codeSystem']] || con['codeSystemName']
        Concept.new(code: con['code'],
                    code_system_name: code_system_name,
                    code_system_version: con['codeSystemVersion'],
                    display_name: con['displayName'], code_system_oid: con['codeSystem'])
      end
    end
  end
end