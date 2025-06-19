import mongoose from "mongoose";

const types = {
    type:String,
    unique:false,
    required:true
}


const schema = new mongoose.Schema({
    title:types,
    description: types,
    content:types,
    image:types,
    link:String
});

const book = mongoose?.models?.book || mongoose?.model("book", schema);

export default book;