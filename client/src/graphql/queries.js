import { gql } from "@apollo/client";

const GET_POSTS = gql`
query GetPosts{
   posts {
    id
    name
    description
    imageUrl
  }
}
`;

const GET_POST = gql`
query getPost($id: id!){
   post(id: $id) {
    id
    name
    description
    imageUrl
   }
}
`;

export { GET_POSTS, GET_POST };
