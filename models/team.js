import mongoose from "mongoose";

const types = {
  type: String,
  unique: false,
};

const schema = new mongoose.Schema({
  title: types,
  about:types,
  portfolio:types,
  facebook:types,
  instagram:types,
  picture:types,
  profession:types,
  linkedin:types,
  resume:types
});

const team = mongoose?.models?.team || mongoose?.model("team", schema);

export default team;
