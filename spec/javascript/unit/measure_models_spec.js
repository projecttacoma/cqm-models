const CQM = require('./../../../app/assets/javascripts/cqm/AllCQMModels')
const AdverseEvent = require('./../../../app/assets/javascripts/AdverseEvent.js').AdverseEvent;
const Buffer = require('mongoose/browser').Schema.Types.Buffer;

describe('CQM', () => {

  describe('Measure', () => {

    it('can construct a measure', () => {
      measure = new CQM.Measure({
        title: 'Basic Measure',
        hqmf_id: '40280582-5C5B-CF39-015C-A69BB10D15D8',
        hqmf_set_id: '6DB434E0-8FC7-42C8-B3B2-A7653E2A0D16',
        hqmf_version_number: '0.1.023',
        source_data_criteria: [
          new AdverseEvent(),
          new AdverseEvent(),
          new AdverseEvent()
        ],
        cms_id: 'CMS9999v3',
        main_cql_library: 'TestMainLibrary'
      });
      err = measure.validateSync();
      expect(err).toBeUndefined();
      expect(measure.source_data_criteria.length).toEqual(3)
    });

    it('can construct and save a measure with two population_sets', () => {
      measure = new CQM.Measure({
        title: 'Measure with two population sets',
        hqmf_id: '33403582-5C5B-CF39-015C-A69BB10D15D8',
        hqmf_set_id: '893434E0-8FC7-42C8-B3B2-A7653E2A0D16',
        hqmf_version_number: '0.1.023',
        cms_id: 'CMS9999v3',
        main_cql_library: 'TestMainLibrary',
        measure_scoring: 'PROPORTION'
      });
      measure.population_sets.push(new CQM.PopulationSet({
        title: 'Test Population 1',
        population_set_id: 'some id',
        populations: new CQM.PopulationMap({
          IPP: new CQM.StatementReference({ library_name: 'TestMainLibrary', statement_name: 'Initial Population 1' }),
          DENOM: new CQM.StatementReference({ library_name: 'TestMainLibrary', statement_name: 'Denominator 1' }),
          DENEX: new CQM.StatementReference({ library_name: 'TestMainLibrary', statement_name: 'Denominator Exlusion 1' }),
          NUMER: new CQM.StatementReference({ library_name: 'TestMainLibrary', statement_name: 'Numerator 1' })
        })
      }));
      measure.population_sets.push(new CQM.PopulationSet({
        title: 'Test Population 2',
        population_set_id: 'some id two',
        populations: new CQM.PopulationMap({
          IPP: new CQM.StatementReference({ library_name: 'TestMainLibrary', statement_name: 'Initial Population 2' }),
          DENOM: new CQM.StatementReference({ library_name: 'TestMainLibrary', statement_name: 'Denominator 2' }),
          DENEX: new CQM.StatementReference({ library_name: 'TestMainLibrary', statement_name: 'Denominator Exlusion 2' }),
          NUMER: new CQM.StatementReference({ library_name: 'TestMainLibrary', statement_name: 'Numerator 2' })
        })
      }));
      err = measure.validateSync();
      expect(err).toBeUndefined();
    });

    it('can construct a measure with multiple population_sets and stratifications and execute all_stratifications', () => {
      measure = new CQM.Measure();
      measure.population_sets.push(new CQM.PopulationSet({
        title: 'PS1',
        stratifications: [new CQM.Stratification({ title: "PS1 S1" }), new CQM.Stratification({ title: "PS1 S2" })]
      }))
      measure.population_sets.push(new CQM.PopulationSet({
        title: 'PS2',
        stratifications: [new CQM.Stratification({ title: "PS2 S1" }), new CQM.Stratification({ title: "PS2 S2" })]
      }))
      expect(measure.all_stratifications().map(s => s.title)).toEqual(["PS1 S1", "PS1 S2", "PS2 S1", "PS2 S2"])
    })

    it('can construct and save a measure with a package', () => {
      measure = new CQM.Measure({
        title: 'Measure with package',
        hqmf_id: '53180582-5C5B-CF39-015C-A69BB10D15D8',
        hqmf_set_id: '424434E0-8FC7-42C8-B3B2-A7653E2A0D16',
        hqmf_version_number: '0.1.023',
        cms_id: 'CMS9999v3',
        main_cql_library: 'TestMainLibrary'
      });
      measure_package = new CQM.MeasurePackage({
        file: "TEST DATA"
      });
      measure.package = measure_package
      err = measure_package.validateSync();
      expect(err).toBeUndefined();
      err = measure.validateSync();
      expect(err).toBeUndefined();
    });

    it('can construct a measure with two cql libraries', () => {
      measure = new CQM.Measure({
        title: 'Measure with two cql libraries',
        hqmf_id: '40280582-5C5B-CF39-015C-A69BB10D15D8',
        hqmf_set_id: '6DB434E0-8FC7-42C8-B3B2-A7653E2A0D16',
        hqmf_version_number: '0.1.023',
        cms_id: 'CMS9999v3',
        main_cql_library: 'TestMainLibrary'
      });
      measure.cql_libraries.push(new CQM.CQLLibrary({
        library_name: 'TestMainLibrary',
        library_version: '0.1.023',
        cql: "define \"test1\": \"test2\" union \"Helper.test34\"\ndefine \"test2\": 'testing'",
        elm: { test: { elm: 'data' } },
        elm_annotations: { test: { elm: 'data' } },
        is_main_library: true,
        statement_dependencies: [
          new CQM.StatementDependency({
            statement_name: 'test1', statement_references: [
              new CQM.StatementReference({ library_name: 'TestMainLibrary', statement_name: 'test2' }),
              new CQM.StatementReference({ library_name: 'TestHelperLibrary', statement_name: 'test34' })
            ]
          }),
          new CQM.StatementDependency({ statement_name: 'test2', statement_references: [] })
        ]
      }));
      measure.cql_libraries.push(new CQM.CQLLibrary({
        library_name: 'TestHelperLibrary',
        library_version: '0.1.026',
        cql: "define \"test34\": \"test35\"\ndefine \"test35\": 'testing'",
        elm: { test: { elm: 'data' } },
        elm_annotations: { test: { elm: 'data' } },
        statement_dependencies: [
          new CQM.StatementDependency({
            statement_name: 'test34', statement_references: [
              new CQM.StatementReference({ library_name: 'TestHelperLibrary', statement_name: 'test35' })
            ]
          }),
          new CQM.StatementDependency({ statement_name: 'test35', statement_references: [] })
        ]
      }));
      err = measure.validateSync();
      expect(err).toBeUndefined();
    });

  });

});