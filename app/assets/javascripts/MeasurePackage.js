var Schema = mongoose.Schema;
var Buffer = Schema.Types.Buffer;
var ObjectId = Schema.Types.ObjectId;

var MeasureSchema = mongoose.Schema({
	file: Buffer
},
// Options
{
	timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports.MeasurePackageSchema = MeasureSchema;
module.exports.MeasurePackage = mongoose.model("measure_package", MeasurePackageSchema);