const mongoose = require("mongoose");
const CharacterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 255,
    },
    anime: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 255,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Character", CharacterSchema);
