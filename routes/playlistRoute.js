const PListRouter = require("express").Router();
const PlayListModel = require("../model/playlistModel");
const SongModel = require("../model/songModel")


//create playlist

// PListRouter.post("/", async (req, res) => {
//     try {
//         const user = await User.findById(req.user._id);
//         const playlist = await PlayListModel({ ...req.body, user: user._id }).save();
//         user.playlist.push(playlist._id)
//         await user.save();
//     } catch (error) {

//     }
// })