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
    required: [true, "Password field is required"],
  },
  number: {
    type: String,
    required: [true, "Number field is required"],
  },
  type: {
    type: String,
    required: [true, "Type field is required"],
  },
});

const Usermodel = mongoose.model("users", UserSchema);
module.exports = Usermodel;
