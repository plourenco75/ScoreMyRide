var mongoose = require('mongoose');

//SCHEMA SETUP
var wavetypeSchema = new mongoose.Schema({
    name: String,
    supertube: Number,
    superturn: Number,
    superhuman: Number,
    mediumtube: Number,
    mediumturn: Number,
    smalltube: Number,
    smallturn: Number,
    image: String,
    description: String,
    // author: {
    //     id: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "User"
    //     },
    //     username: String
    // },
    // comments: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Comment"
    //     }
    // ]
});

module.exports = mongoose.model("Wavetype", wavetypeSchema);