import { model, models, Schema } from "mongoose";

const schema = new Schema({
    device_uid:{
        type:String,
        required:true,
        unique:true
    }
});

const devices = models?.device || model("device" , schema);
module.exports = devices