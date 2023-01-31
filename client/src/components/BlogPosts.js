import React from 'react'



import { BlogPost } from './BlogPost';
import { useState } from 'react';




function BlogPosts() {

  const [data, setData] = useState();

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