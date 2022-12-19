import React from 'react'
import { gql, useQuery, useSubscription } from '@apollo/client';
import { GET_POSTS } from '../graphql/queries';


import BlogPost from './BlogPost';




function BlogPosts() {

  const { data, loading, error } = useQuery(GET_POSTS);
  if (loading) { return <p>Loading...</p> }
  if (error) { return `Error! ${error.message}` }

  return (
    <>
      {data.posts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}

    </>
  )
}

export default BlogPosts;