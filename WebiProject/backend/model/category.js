let mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    title: String,

    imageURL: String,
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
