const { Schema, models, model } = require("mongoose");

const schema = new Schema({
    banner: {
        type: String, required: true
    },
    link: { type: String, required: true },
    index: {
        type: Number,
    },
    page: {
        type: String,
        required: true,
        enum: ["home", "services", "news", "blogs", "books", "gallery", "services[id]", "events", "events[id]", "achievements", "achievements[id]", "blogs[id]", "news[id]"]
    }
})

const ads = models?.ad || model("ad", schema);
module.exports = ads;