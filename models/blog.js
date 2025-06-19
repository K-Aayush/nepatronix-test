import mongoose from "mongoose";

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
  comments: {},
  likes: {
    type: Number,
    required: true,
    default: 0,
  },
  link:String
});

const blog = mongoose?.models?.blog || mongoose?.model("blog", schema);

export default blog;
