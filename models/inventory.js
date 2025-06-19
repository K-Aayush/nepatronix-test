const { Schema, models, model } = require("mongoose");
const { type } = require("os");

const newItems = new Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: String,
    required: true,
  },
  discount:String,
  vat:String,
  price: {
    type: String,
    required: true,
  },
});

const schema = new Schema({
  company: {
    type: String,
    required: true,
  },
  contact:String,
  address:String,
  type:{
    type:String, 
    required:true,
    enum:["purchase", "sales"]
  },
  items: [newItems],
  billType: {
    type: String,
    required: true,
    enum: ["vat", "pan"],
  },
  billNo: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  total:{
    type:Number,
    required:true
  }
});

const inventory = models?.inventory || model("inventory", schema);
module.exports = inventory;
