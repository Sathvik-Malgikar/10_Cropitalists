const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  number: {
    type: String,
    required: [true, "Number field is required"],
  },
  region: {
    type: String,
    required: [true, "Region field is required"],
  },
  imageURL: {
    type: String,
    required: [true, "Image URL field is required"],
  },
  type: {
    type: String,
    required: [true, "Type field is required"],
  },
});

const Usermodel = mongoose.model("users", UserSchema);
module.exports = Usermodel;
