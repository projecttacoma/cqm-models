var mongoose = require('mongoose');

var PlaceholderResultSchema = mongoose.Schema({
  cache_id : String,
  measure_id : String,
  sub_id : String,
  test_id : String,
  effective_date : Number,
  filters : Object,
  prefilter : Object,
  calculation_time : Date,
  status : Object,

  population_ids : Object,
  IPP : Number,
  DENOM : Number,
  NUMER : Number,
  antinumerator : Number,
  DENEX : Number,
  DENEXCEP : Number,
  MSRPOPL : Number,
  OBSERV : Number,
  supplemental_data : Object
});

module.exports = mongoose.model("Result", PlaceholderResultSchema);
