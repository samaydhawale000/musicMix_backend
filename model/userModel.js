const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:String,
    email: String,
    password:String,
    admin:Boolean,
    likedSongs: { type: [String], default: [] },
	playlists: { type: [String], default: [] },

})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel
