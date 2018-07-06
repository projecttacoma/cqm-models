const CQM = require('./../../../app/assets/javascripts/cqm/AllCQMModels')

describe('CQM', () => {

  describe('Measure', () => {

    it('can construct a measure', () => {
      measure = new CQM.Measure({
        title: 'Basic Measure',
        hqmf_id: '40280582-5C5B-CF39-015C-A69BB10D15D8',
        hqmf_set_id: '6DB434E0-8FC7-42C8-B3B2-A7653E2A0D16',
        hqmf_version_number: '0.1.023',
        cms_id: 'CMS9999v3',
        main_cql_library: 'TestMainLibrary'
      })
      err = measure.validateSync()
      expect(err).toBeUndefined();
    });

  });

});