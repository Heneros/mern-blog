import { gql } from '@apollo/client';


const ADD_POST = gql`
mutation addPost($name: String!,$description: String!,$imageUrl: String!){
    addPost(name: $name,description: $description,imageUrl: $imageUrl,){
        name,
        description,
        imageUrl
    }
}
`

const DELETE_POST = gql`
mutation deletePost($id: ID!){
    deletePost(id: $id){
        id, 
        name,
        description,
        imageUrl
    }
}`;


export { ADD_POST, DELETE_POST };