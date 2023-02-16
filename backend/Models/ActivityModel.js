const mongoose = require("mongoose");
const activitySchema = mongoose.Schema({
  activity: {
    // required: true,
    type: String,
  },
  duration: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: String,
  },
});
module.exports = mongoose.model("activity", activitySchema);
