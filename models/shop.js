import mongoose from "mongoose";

const types = {
  type: String,
  unique: false,
  required: true,
};

const schema = new mongoose.Schema({
  title: types,
  description: types,
  images: [String],
  cover: types,
  category:String,
  price: types,
  productNo: { type: String, unique: true, required: true },
  link: String,
});

const shop = mongoose?.models?.shop || mongoose?.model("shop", schema);

export default shop;
