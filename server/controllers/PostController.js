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



export const update = async (req, res) => {
    try {
        const postId = req.params.id;
        await PostsModel.updateOne({
            _id: postId
        }, {
            title: req.body.title,
            text: req.body.text,
            imageUrl: req.body.imageUrl,
        });
        res.json({
            success: true
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to update post.',
        });
    }
}


export const getOne = async (req, res) => {
    try {
        const postId = req.params.id;
        PostsModel.findOneAndUpdate(
            {
                _id: postId
            },
            {
                returnDocument: 'after'
            },
            (err, doc) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({
                        message: 'Failed to fetch post'
                    });
                }
                else if (!doc) {
                    return res.status(404).json({
                        message: "Post no finded"
                    });
                }
                res.json(doc);
            }
        )

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to fetch post.',
        });
    }
}




export const getAll = async (req, res) => {
    try {
        const posts = await PostsModel.find().exec();
        res.json(posts);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to fetch posts.',
        });
    }
}