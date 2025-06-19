import { model, models, Schema } from "mongoose";

const schema = new Schema({
  UID: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  entry: { type: [String], required: true, default: [] },
  exit: { type: [String], required: true, default: [] },
});

const attendance = models.attendance || model("attendance", schema);
module.exports = attendance;