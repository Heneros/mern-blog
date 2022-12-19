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


export { ADD_POST };


















