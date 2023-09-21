const mongoose = require("mongoose");
const Password = mongoose.Schema(
  {
    Password: {
      type: String,
      required: [true, "please specify a Password"],
    },

  },

  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Password", Password);