var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;
var Integer = Schema.Types.Integer;
var Array = Schema.Types.Array;
var String = Schema.Types.String;
var Float = Schema.Types.Float;
var Boolean = Schema.Types.Boolean;
var Mixed = Schema.Types.Mixed;

var MeasureSchema = mongoose.Schema({
	category: { type: String, default: 'Uncategorized' },
	cms_id: String,
	complexity: Mixed,
	continuous_variable: Boolean,
	cql: [String],
	cql_statement_dependencies: Mixed,
	data_criteria: Mixed,
	description: String,
	elm: [Mixed],
	elm_annotations: Mixed,
	episode_of_care: Boolean,
	hqmf_id: String,
	hqmf_set_id: String,
	hqmf_version_number: Integer,
	main_cql_library: String,
	measure_attributes: [],
	measure_id: String,
	measure_period: Interval,
	needs_finalize: Boolean,
	observations: [Mixed],
	population_criteria: Mixed,
	populations: [Mixed],
	source_data_criteria: Mixed,
	title: String,
	type: String,
	value_set_oids: [Mixed],
	value_set_oid_version_objects: [Mixed],
	version: Integer,

});

var Measure = mongoose.model("Measure", MeasureSchema);
