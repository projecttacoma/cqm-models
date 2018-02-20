var Schema = mongoose.Schema;
var Code = Schema.Types.Code;
var Interval = Schema.Types.Interval;
var Quantity = Schema.Types.Quantity;
var Integer = Schema.Types.Integer;
var Array = Schema.Types.Array;
var String = Schema.Types.String;
var Float = Schema.Types.Float;
var Time = Schema.Types.Time;
var Datatype = require('./basetypes/Datatype');

var ProviderCareExperienceSchema = Datatype.extendSchema(Datatype.DatatypeSchema,
  author_datetime: DateTime,
  hqmf_oid: { type: String, default: "2.16.840.1.113883.10.20.28.3.70" },
  category: { type: String, default: "care_experience" },
  qdm_version: { type: String, default: "5.3" }
});

var ProviderCareExperience = mongoose.model("ProviderCareExperience", ProviderCareExperienceSchema);
