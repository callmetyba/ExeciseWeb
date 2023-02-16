const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  fullName: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  age: {
    required: true,
    type: String,
  },
  sex: {
    type: String,
  },
});
module.exports = mongoose.model("userModel", userSchema);
