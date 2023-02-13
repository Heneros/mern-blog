import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    imageUrl: String,
    viewsCount: {
        type: Number,
        default: 0
    },
},

    {
        timestamps: true,
    },
);

export default mongoose.model('Post', PostSchema);
