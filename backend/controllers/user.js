const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Users = require("../models/user");

const signup = async (req, res) => {
  const { name, email, type, region } = req.body;
  try {
    const existingUser = await Users.findOne({ email: email, type: type });
    if (!existingUser) {
      return res.status(404).json({ message: "User doesn't exist" });
      res.status(200).json({ message: "Successful Login" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.signup = signup;
