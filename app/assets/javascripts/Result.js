const mongoose = require('mongoose/browser');

const PlaceholderResultSchema = mongoose.Schema({
  cache_id: String,
  measure_id: String,
  sub_id: String,
  test_id: String,
  effective_date: Number,
  filters: Object,
  prefilter: Object,
  calculation_time: Date,
  status: Object,
  population_ids: Object,
  STRAT: Number,
  IPP: Number,
  DENOM: Number,
  NUMER: Number,
  NUMEX: Number,
  DENEX: Number,
  DENEXCEP: Number,
  MSRPOPL: Number,
  OBSERV: Number,
  MSRPOPLEX: Number,
  supplemental_data: Object,
});

module.exports.ResultSchema = PlaceholderResultSchema;
class PlaceholderResult extends mongoose.Document {
  constructor(object) {
    super(object, PlaceholderResultSchema);
  }
}
module.exports.PlaceholderResult = PlaceholderResult;
