const mongoose = require("mongoose");
const PirateSchema = new mongoose.Schema(
  {
    pirateName: { type: String, required: [true, "This field is required"] },
    imgUrl: { type: String, required: [true, "This field is required"] },
    treasureChests: {
      type: Number,
      required: [true, "This field is required"],
    },
    pirateinfo: { type: String, required: [true, "This field is required"] },
    crewPositon: { type: String, required: [true, "This field is required"] },
    pegLeg: {
      type: Boolean,
      required: [true, "This field is required"],
      default: false,
    },
    eyePovk: {
      type: Boolean,
      required: [true, "This field is required"],
      default: false,
    },
    hookHand: {
      type: Boolean,
      required: [true, "This field is required"],
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Pirate", PirateSchema);
