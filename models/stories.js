import mongoose from "mongoose";
import { type } from "os";

const types = {
  type: String,
  unique: false,
  required: true,
};

const schema = new mongoose.Schema({
  title: types,
  description: types,
  content: types,
  image: types,
  views: {
    type: Number,
    required: true,
    default: 0,
  },
  comments: { type: Number, default: 0 },
  likes: {
    type: Number,
    required: true,
    default: 0,
  },
  author: types,
  profile: types,
  accepted: {
    type: Boolean,
    required: true,
    default: false,
  },link:String
});

const stories = mongoose?.models?.storie || mongoose?.model("storie", schema);

export default stories;
