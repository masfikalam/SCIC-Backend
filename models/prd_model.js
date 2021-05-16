const mongoose = require("mongoose");

// create product schema
const prdSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    owner: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// export schema model
module.exports.PrdModel = mongoose.model("Product", prdSchema);
