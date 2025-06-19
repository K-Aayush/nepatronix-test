const { Schema, models, model } = require("mongoose");

const schema = new Schema({
    date:String
});
const visitor = models?.visitor || model("visitor", schema);
export default visitor;
