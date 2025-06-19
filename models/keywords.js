import { Schema, model, models } from "mongoose";

const schema = new Schema({
  keyword: String,
});

const keyword = models?.keyword || model("keyword", schema);
export default keyword;
