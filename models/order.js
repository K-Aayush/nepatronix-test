import mongoose from "mongoose";
import { type } from "os";
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
  itemId: {
    type: String,
    required: true,
  },
  itemName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: `${new Date().getTime()}`,
  },
  status: {
    type: String,
    required: true,
    enum: ["completed", "pending"],
    default: "pending",
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

const order = mongoose?.models?.order || mongoose.model("order", schema);

export default order;
