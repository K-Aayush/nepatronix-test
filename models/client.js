import { model, models, Schema } from "mongoose";

const schema = new Schema({
  image:{
    type:String,
    required:true
  }
});

const client = models?.client || model("client", schema);
module.exports = client