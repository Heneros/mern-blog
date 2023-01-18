import PostsModel from '../models/Posts';




export const create = async (req, res) => {
    try {
        const doc = new PostModel({
            title: req.body.title,
            text: req.body.text,
            imageUrl: req.body.imageUrl,
            tags: tags.body.tags,
        });
        const post = await doc.save();
        res.json(post);
    } catch (err) {
        console.log(err + 'Error');
    }
}


