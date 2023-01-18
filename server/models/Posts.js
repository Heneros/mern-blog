import mongoose from 'mongoose';

const PostsSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    imageUrl: {
        type: String
    },
},
    {
        timestamps: true
    }

)



export default mongoose.model('Post', PostsSchema);







