import React from 'react'
import { gql, useQuery, useSubscription } from '@apollo/client';
import { GET_POSTS } from '../graphql/queries';
import axios from '../axios';
import { useParams } from 'react-router-dom';

import { BlogPost } from './BlogPost';
import { useState } from 'react';




function BlogPosts() {

  const { id } = useParams();

  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);


  React.useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.warn(err + `Error`);
        // alert(`Error`);
      }, [])
  });



  // const { data, loading, error } = useQuery(GET_POSTS);
  // if (loading) { return <p>Loading...</p> }
  // if (error) { return `Error! ${error.message}` }

  return (
    <>

      <BlogPost
        id={data._id}
        title={data.title}
        imageUrl={data.imageUrl}
      />

    </>
  )
}

export default BlogPosts;