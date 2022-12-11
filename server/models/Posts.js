const mongoose = require('mongoose');




const PostsSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    imageUrl: {
        type: String
    }
})









