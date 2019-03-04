require 'spec_helper'

RSpec.describe CQM::Measure do
  it 'can construct a measure' do
    expect do
      measure = CQM::Measure.new(
        title: 'Basic Measure',
        hqmf_id: '40280582-5C5B-CF39-015C-A69BB10D15D8',
        hqmf_set_id: '6DB434E0-8FC7-42C8-B3B2-A7653E2A0D16',
        hqmf_version_number: '0.1.023',
        cms_id: 'CMS9999v3',
        main_cql_library: 'TestMainLibrary'
      )
      measure.save!
    end.to_not raise_error
  end

  it 'can construct and save a measure with two population_sets' do
    measure = CQM::Measure.new(
      title: 'Measure with two population sets',
      hqmf_id: '33403582-5C5B-CF39-015C-A69BB10D15D8',
      hqmf_set_id: '893434E0-8FC7-42C8-B3B2-A7653E2A0D16',
      hqmf_version_number: '0.1.023',
      cms_id: 'CMS9999v3',
      main_cql_library: 'TestMainLibrary',
      measure_scoring: 'PROPORTION'
    )
    measure.population_sets << CQM::PopulationSet.new(
      title: 'Test Population 1',
      population_set_id: 'some id',
      populations: CQM::ProportionPopulationMap.new(
        IPP: CQM::StatementReference.new(library_name: 'TestMainLibrary', statement_name: 'Initial Population 1'),
        DENOM: CQM::StatementReference.new(library_name: 'TestMainLibrary', statement_name: 'Denominator 1'),
        DENEX: CQM::StatementReference.new(library_name: 'TestMainLibrary', statement_name: 'Denominator Exlusion 1'),
        NUMER: CQM::StatementReference.new(library_name: 'TestMainLibrary', statement_name: 'Numerator 1')
      )
    )
    measure.population_sets << CQM::PopulationSet.new(
      title: 'Test Population 2',
      population_set_id: 'some id two',
      populations: CQM::ProportionPopulationMap.new(
        IPP: CQM::StatementReference.new(library_name: 'TestMainLibrary', statement_name: 'Initial Population 2'),
        DENOM: CQM::StatementReference.new(library_name: 'TestMainLibrary', statement_name: 'Denominator 2'),
        DENEX: CQM::StatementReference.new(library_name: 'TestMainLibrary', statement_name: 'Denominator Exlusion 2'),
        NUMER: CQM::StatementReference.new(library_name: 'TestMainLibrary', statement_name: 'Numerator 2')
      )
    )
    measure.save!
  end

  it 'can construct a measure with multiple population_sets and stratifications and execute all_stratifications' do
    measure = CQM::Measure.new
    measure.population_sets << CQM::PopulationSet.new(
      title: 'PS1',
      stratifications: [CQM::Stratification.new(title: 'PS1 S1'), CQM::Stratification.new(title: 'PS1 S2')]
    )
    measure.population_sets << CQM::PopulationSet.new(
      title: 'PS2',
      stratifications: [CQM::Stratification.new(title: 'PS2 S1'), CQM::Stratification.new(title: 'PS2 S2')]
    )
    expect(measure.all_stratifications.map(&:title)).to eq(['PS1 S1', 'PS1 S2', 'PS2 S1', 'PS2 S2'])
  end

  it 'can construct and save a measure with a package' do
    expect do
      measure = CQM::Measure.new(
        title: 'Measure with package',
        hqmf_id: '53180582-5C5B-CF39-015C-A69BB10D15D8',
        hqmf_set_id: '424434E0-8FC7-42C8-B3B2-A7653E2A0D16',
        hqmf_version_number: '0.1.023',
        cms_id: 'CMS9999v3',
        main_cql_library: 'TestMainLibrary'
      )
      measure_package = CQM::MeasurePackage.new(
        file: BSON::Binary.new('TEST DATA', :generic)
      )
      measure.package = measure_package
      measure_package.save!
      measure.save!
    end.to_not raise_error
  end

  it 'can construct a measure with two cql libraries' do
    expect do
      measure = CQM::Measure.new(
        title: 'Measure with two cql libraries',
        hqmf_id: '40280582-5C5B-CF39-015C-A69BB10D15D8',
        hqmf_set_id: '6DB434E0-8FC7-42C8-B3B2-A7653E2A0D16',
        hqmf_version_number: '0.1.023',
        cms_id: 'CMS9999v3',
        main_cql_library: 'TestMainLibrary'
      )
      measure.cql_libraries << CQM::CQLLibrary.new(
        library_name: 'TestMainLibrary',
        library_version: '0.1.023',
        cql: "define \"test1\": \"test2\" union \"Helper.test34\"\ndefine \"test2\": 'testing'",
        elm: { test: { elm: 'data' } },
        elm_annotations: { test: { elm: 'data' } },
        is_main_library: true,
        statement_dependencies: [
          CQM::StatementDependency.new(statement_name: 'test1', statement_references:
            [
              CQM::StatementReference.new(library_name: 'TestMainLibrary', statement_name: 'test2'),
              CQM::StatementReference.new(library_name: 'TestHelperLibrary', statement_name: 'test34')
            ]),
          CQM::StatementDependency.new(statement_name: 'test2', statement_references: [])
        ]
      )
      measure.cql_libraries << CQM::CQLLibrary.new(
        library_name: 'TestHelperLibrary',
        library_version: '0.1.026',
        cql: "define \"test34\": \"test35\"\ndefine \"test35\": 'testing'",
        elm: { test: { elm: 'data' } },
        elm_annotations: { test: { elm: 'data' } },
        statement_dependencies: [
          CQM::StatementDependency.new(statement_name: 'test34', statement_references:
            [
              CQM::StatementReference.new(library_name: 'TestHelperLibrary', statement_name: 'test35')
            ]),
          CQM::StatementDependency.new(statement_name: 'test35', statement_references: [])
        ]
      )
      measure.save!
    end.to_not raise_error
  end
end
