const { Schema, model, models } = require("mongoose");
const schema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    youtube:{
        type:String,
        required:true,
        unique:true
    },
    link:{
        type:String,
        required:true,
        unique:true
    },
    description:String,
    content:String
})

const youtube = models?.youtube || model("youtube", schema);
export default youtube