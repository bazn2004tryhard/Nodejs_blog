const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, require: true },
    des: { type: String, maxlength: 600 },
    image: { type: String, maxlength: 250 },
    videoId: { type: String, require: true },
    level: { type: String, maxlength: 250 },
    slug: { type: String, maxlength: 250 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", Course);
