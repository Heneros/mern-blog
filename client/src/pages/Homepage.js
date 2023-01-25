import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


import BlogPosts from '../components/BlogPosts';
import Header from '../components/Header';
import CreatePost from '../components/CreatePost';
import { fetchPosts } from '../redux/slices/posts';


export default function HomePage() {
    const dispatch = useDispatch();
    const { posts } = useSelector(state => state.posts);
    const isPostsLoading = posts.status === 'loading';

    React.useEffect(() => {
        dispatch(fetchPosts());
    }, []);
    console.log(posts);

    return (
        <>
            <Header />
            <div className='container'>
                <div className="row">
                    <div className="col-xl-8">
                        {(isPostsLoading ? [...Array(1)] : posts.items).map((obj, index) => isPostsLoading ? (
                            ////  <span>Posts not found.</span>
                            <BlogPosts
                                key={index}
                            />
                        ) : (
                            <BlogPosts
                                id={obj._id}
                            />
                        )
                        )};
                    </div>
                    <div className="col-xl-4">
                        <div className="btns">
                            <CreatePost />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
