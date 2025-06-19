const { Schema, models, model } = require("mongoose");

const schema = new Schema({
  type: {
    type: String,
    required: true,
    enum: ["expense", "income"],
  },
  expenseType:{
    type:String,
    enum:["purchase", "administrative", "miscellaneous", "repairing", "advertisement",""]
  },
  incomeType:{
    type:String,
    enum:["sales", "classes",""]
  },
  year: {
    type: String,
    required: true,
    default: function () {
      return new Date().getFullYear();
    },
  },
  month:{
    type:String,
    required:true,
    default: function(){

      return new Date().getMonth()+1
    }
  },
  date:{
    type:String,
    required:true,
    default:function(){
      return new Date().getDate()
    }
  },
  discount:{
    type:Number,
    required:true,
    default:0,
  },
  vat:{
    type:Number,
    required:true,
    default:0,
  },
  amount:{
    type:Number,
    required:true
  },
  remarks:{
    type:String,
    required:true
  },
  panNo:String,
  vatNo:String,
  companyName:{
    type:String,
    required:true
  },
  address:{
    type:String,
  },
  contact:{
    type:String,
  }
});

const transiction = models?.transiction || model("transiction", schema);
module.exports = transiction;
