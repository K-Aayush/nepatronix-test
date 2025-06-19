import mongoose from "mongoose";
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  reply: {
    type: [String],
    required: true,
    default: [],
  },
});

const comment = mongoose?.models?.comment || mongoose.model("comment", schema);

export default comment;
