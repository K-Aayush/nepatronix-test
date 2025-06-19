import mongoose from "mongoose";

const types = {
  type: String,
  unique: false,
};

const schema = new mongoose.Schema(
  {
    title: types,
    description: types,
    icon: types,
    learn: [types],
    syllabus: [types],
    link:String
  },
  { timestamps: true, timeseries: true }
);

const course = mongoose?.models?.course || mongoose?.model("course", schema);

export default course;
