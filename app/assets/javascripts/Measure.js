var Schema = mongoose.Schema;
var Code = require('./basetypes/Code');
var Interval = require('./basetypes/Interval');
var Quantity = require('./basetypes/Quantity');
var Integer = Schema.Types.Integer;
var Array = Schema.Types.Array;
var String = Schema.Types.String;
var Float = Schema.Types.Float;
var Boolean = Schema.Types.Boolean;
var Mixed = Schema.Types.Mixed;
var ObjectId = Schema.Types.ObjectId;
var Date = Schema.Types.Date;

var MeasureSchema = mongoose.Schema({
	id: String,
	measure_id: String,
	hqmf_id: String,
	hqmf_set_id: String,
	hqmf_version_number: Integer,
	cms_id: String,
	title: String,
	description: String,
	type: String,
	category: { type: String, default: 'Uncategorized' },

	episode_of_care: Boolean,
	continuous_variable: Boolean,
	episode_ids: [], // not sure if this is necessary

	needs_finalize: Boolean, // Bonnie-specific?

	published: Boolean,
	publish_date: Date,
	version: Integer,

	elm_annotations: Mixed,

	cql: [String],
	elm: [Mixed],
	main_cql_library: String,
	cql_statement_dependencies: Mixed,

	population_criteria: Mixed,
	data_criteria: Mixed,
	source_data_criteria: Mixed,
	measure_period: Interval,
	measure_attributes: [],
	populations: [Mixed],
	populations_cql_map, Mixed,
	observations: [Mixed],

	value_set_oids: [Mixed],
	value_set_oid_version_objects: [Mixed],

	complexity: Mixed, // Bonnie-specific?

	user: { type: ObjectId, ref: 'User', index: true },
	bundle: { type: ObjectId, ref: 'Bundle' },
	package: { type: ObjectId, ref: 'CqlMeasurePackage' }

},
// Options
{
	timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports.MeasureSchema = MeasureSchema;
module.exports.Measure = mongoose.model("cql_measure", MeasureSchema);
