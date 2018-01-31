var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;

var ProviderCareExperienceSchema = new Schema({
  author_datetime: DateTime,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.70" },
  category: { type: String, default: "care_experience" },
  qdm_version: { type: String, default: "5.3" }
});

var ProviderCareExperience = mongoose.model("ProviderCareExperience", ProviderCareExperienceSchema);
