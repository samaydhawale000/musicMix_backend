const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    user: { type: ObjectId, ref: "user", required: true },
    desc: { type: String },
    songs: { type: Array, default: [] },
    img: { type: String },
})

const PlayListModel = mongoose.model("playlist", playlistSchema);

module.exports = PlayListModel