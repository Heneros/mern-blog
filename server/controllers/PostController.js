import PostsModel from '../models/Posts.js';




export const create = async (req, res) => {
    try {
        const doc = new PostsModel({
            title: req.body.title,
            text: req.body.text,
            imageUrl: req.body.imageUrl,
        });
        const post = await doc.save();
        res.json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to create post.',
        });
    }
}

