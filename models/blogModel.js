const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    msg: {
      type: String,
      required: [true, "message is missing."],
    },
    user: {
      type: String,
      required: [true, "message is missing."],
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
    postType: {
      type: String,
      default: "public",
    },
  },
  {
    timeStamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = mongoose.model("blogs", blogSchema);
