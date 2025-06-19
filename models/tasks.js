const { Schema, models, model } = require("mongoose");


const update = new Schema({
  member:{
    type:String,
    required:true
  },
  text:{
    type:String,
    required:true
  },
  remarks:[String]
})

const schema = new Schema({
  title:{
    type:String,
    required:true
  },
  year:{
    type:String, required:true,
    default:function(){
      return new Date().getFullYear()
    }
  },
  month:{
    type:String, required:true,
    default:function(){
      return new Date().getMonth()+1

    }
  },
  members:[String],
  status:{
    type:String,
    required:true,
    enum:["ongoing", "completed"],
    default:"ongoing",
  },
  deadline:{
    type:String,
    required:true
  },
  startingDate:{
    type:String,
    required:true
  },
  description:String,
  files:[Object],
  updates:[update],
  individualProgress:{
    type:Object,
    required:true,
    default:{}
  },
  totalProgress:{
    type:Number,
    required:true,
    default:0
  },
  requirements:String
})


const tasks = models?.task || model("task", schema);
module.exports = tasks;
