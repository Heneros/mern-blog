import React from 'react'
import { gql, useQuery, useSubscription } from '@apollo/client';
import { GET_POSTS } from '../graphql/queries';


import BlogPost from './BlogPost';




function BlogPosts() {
//     const GET_DOGS = gql`
//     query GetDogs {
//       dogs {
//         id
//         breed
//       }
//     }
//   `;
  


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

    const { data, loading, error } = useQuery(GET_POSTS);
    if (loading) { return <p>Loading...</p> }
    if (error) { return  `Error! ${error.message}`}

    return (
        <>
            {data.posts.map(post => (
                <BlogPost key={post.id} post={post} />
            ))}

        </>
    )
}

export default BlogPosts;