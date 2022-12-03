const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require('graphql');
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
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return Posts.findById(args.id);
            }
        }
    }
})