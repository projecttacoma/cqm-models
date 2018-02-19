var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var FamilyHistorySchema = new Schema({
  author_datetime: DateTime,
  relationship: Code,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.111" },
  qrda_oid: { type: String, default: "2.16.840.1.113883.10.20.24.3.12" },
  category: { type: String, default: "family_history" },
  qdm_version: { type: String, default: "5.3" }
});

var FamilyHistory = mongoose.model("FamilyHistory", FamilyHistorySchema);
