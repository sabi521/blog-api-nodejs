const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String, // Store the URL of the uploaded image
      required: false, // Make it optional
    },
  },
  { timestamps: true } // Automatically manages createdAt and updatedAt
);

module.exports = mongoose.model("Post", PostSchema);
