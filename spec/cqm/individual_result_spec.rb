require 'spec_helper'

RSpec.describe CQM::IndividualResult do
  it 'preserves all statement results in array hash conversion' do
    results = JSON.parse(File.read(File.join('spec', 'fixtures', 'results', 'example_results.json')))
    result = results['5b479b890a97b16d73ba4740']['PopulationCriteria1']
    individual_result = CQM::IndividualResult.new(result)
    statement_result_length = individual_result.statement_results.length
    results_hash = individual_result.statement_results_by_statement
    hash_total = results_hash['DischargedonStatinMedication'].length + results_hash['TJC_Overall'].length + results_hash['MATGlobalCommonFunctions'].length
    expect(statement_result_length).to equal hash_total
  end

  it 'preserves all clause results in array hash conversion' do
    results = JSON.parse(File.read(File.join('spec', 'fixtures', 'results', 'example_results.json')))
    result = results['5b479b890a97b16d73ba4740']['PopulationCriteria1']
    individual_result = CQM::IndividualResult.new(result)
    clause_result_length = individual_result.clause_results.length
    results_hash = individual_result.clause_results_by_clause
    hash_total = results_hash['DischargedonStatinMedication'].length + results_hash['TJC_Overall'].length + results_hash['MATGlobalCommonFunctions'].length
    expect(clause_result_length).to equal hash_total
  end
end
