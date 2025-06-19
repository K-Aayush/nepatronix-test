import mongoose from "mongoose";
const schema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  UID: {
    type: String,
    required: true,
    unique: true,
  },
  monthlySalary: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  }
});

const staff = mongoose?.models?.staff || mongoose.model("staff", schema);

export default staff;
