import PostsModel from '../models/Posts.js';




export const create = async (req, res) => {
    try {
        const doc = new PostsModel({
            title: req.body.title,
            description: req.body.description,
            // text: req.body.text,
            imageUrl: req.body.imageUrl,
            // tags: tags.body.tags,
        });
        const post = await doc.save();
        res.json(post);
    } catch (err) {
        console.log(err + 'Error');
        res.status(500).json({
            message: 'Failed to create post.'
        })
    }
}


