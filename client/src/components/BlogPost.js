import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';


export default function BlogPost({ post }) {

    const { id, name, description, imageUrl } = post;

    return (
        <article class="post">
            <div class="post-header" >
                <h2 class="post-title"><a href={`/posts/${id}`}>{name}</a></h2>
            </div>

            <div class="post-preview" >
                <a href={`/posts/${id}`}>
                    <img src={imageUrl} alt="" class="img-fluid rounded" /></a>
            </div>
            <div class="post-content" >
                <p>
                    {description}
                </p>
            </div>

            <div ><a href={`/posts/${id}`} class="btn btn-outline-custom">Read More</a></div>

        </article>


    )
}
