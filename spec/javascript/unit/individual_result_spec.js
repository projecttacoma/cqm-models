const CQM = require('./../../../app/assets/javascripts/cqm/AllCQMModels')
const results_file = require('../../fixtures/results/example_results.json')

describe('CQM', () => {
  describe('IndividualResult', () => {
    it ('preserves all statement results in array hash conversion', () => {
        result = results_file['5b479b890a97b16d73ba4740']['PopulationCriteria1']
        individual_result = new CQM.IndividualResult(result)
        statement_result_length = individual_result.statement_results.length
        results_hash = individual_result.statement_results_by_statement()
        hash_total = Object.keys(results_hash['DischargedonStatinMedication']).length
        hash_total += Object.keys(results_hash['TJC_Overall']).length
        hash_total += Object.keys(results_hash['MATGlobalCommonFunctions']).length
        expect(statement_result_length).toEqual(hash_total)
    });

    it ('preserves all clause results in array hash conversion', () => {
        result = results_file['5b479b890a97b16d73ba4740']['PopulationCriteria1']
        individual_result = new CQM.IndividualResult(result)
        clause_result_length = individual_result.clause_results.length
        results_hash = individual_result.clause_results_by_clause()
        hash_total = Object.keys(results_hash['DischargedonStatinMedication']).length
        hash_total += Object.keys(results_hash['TJC_Overall']).length
        hash_total += Object.keys(results_hash['MATGlobalCommonFunctions']).length
        expect(clause_result_length).toEqual(hash_total)
    });
  });
});