const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLSchema, GraphQLNonNull } = require('graphql');
const Posts = require('../models/Posts');

const PostsType = new GraphQLObjectType({
    name: "Posts",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        imageUrl: { type: GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        posts: {
            type: new GraphQLList(PostsType),
            resolve(parent, args) {
                return Posts.find();
            }
        },
        post: {
            type: PostsType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Posts.findById(args.id);
            }
        }
    }
});

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addPost: {
            type: PostsType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: new GraphQLNonNull(GraphQLString) },
                imageUrl: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                const post = new Posts({
                    name: args.name,
                    description: args.description,
                    imageUrl: args.imageUrl
                });
                return post.save();
            },
        },
        deletePost: {
            type: PostsType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                return Posts.findByIdAndRemove(args.id);
            }
        }
    }
})


module.exports = new GraphQLSchema({
    mutation,
    query: RootQuery
})