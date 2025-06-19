import mongoose from "mongoose";

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: false,
  },
  name: String,
  role: {
    type: String,
    required: true,
    enum: ["admin", "user", "accountant"],
  },
});

const users = mongoose.models.user || mongoose.model("user", schema);

export default users;
