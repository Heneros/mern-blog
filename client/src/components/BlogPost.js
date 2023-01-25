import React from 'react'
// import { useMutation } from '@apollo/client';
// import { DELETE_POST } from '../graphql/mutations';
// import { GET_POSTS } from '../graphql/queries';
import { Link } from 'react-router-dom';

export default function BlogPost({ post }) {

    // const [deletePost] = useMutation(DELETE_POST, {
    //     variables: { id: post.id },
    //     update(cache, { data: { deletePost } }) {
    //         const { posts } = cache.readQuery({ query: GET_POSTS });
    //         cache.writeQuery({
    //             query: GET_POSTS,
    //             data: { posts: posts.filter(post => post.id !== deletePost.id) },
    //         });
    //     }
    // })

    // const { id, name, description, imageUrl } = post;

    return (
        <>
        
        </>
        // <article className="post">
        //     <div className="post-header" >
        //         <h2 className="post-title"><a href={`/posts/${id}`}>{name}</a></h2>
        //     </div>
        //     <div className="post-preview" >
        //         <a href={`/posts/${id}`}>
        //             <img src={imageUrl} alt="" className="img-fluid rounded" /></a>
        //     </div>
        //     <div className="post-content" >
        //         <p>
        //             {description}
        //         </p>
        //     </div>
        //     <div className='bottom-post'>
        //         <a href={`/posts/${id}`} className="btn btn-outline-custom">Read More</a>
        //         <a href="#!" className='btn btn-danger' onClick={deletePost}>Delete</a>
        //     </div>
        // </article>
    )
}
