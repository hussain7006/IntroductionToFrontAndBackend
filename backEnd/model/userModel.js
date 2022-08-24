const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  userName: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: Date,
});

const userModel = mongoose.model("Users", UserSchema);

module.exports = userModel;