import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


import { BlogPost } from '../components/BlogPost';
import Header from '../components/Header';
import CreatePost from '../components/CreatePost';
import { fetchPosts } from '../redux/slices/posts';


import { ThemeContext } from '../App';
import Tags from '../components/Tags';

export default function HomePage() {
    const dispatch = useDispatch();
    const { posts } = useSelector(state => state.posts);

    const isPostsLoading = posts.status === 'loading';

    React.useEffect(() => {
        dispatch(fetchPosts());
    }, []);


    const theme = useContext(ThemeContext);
    ///   console.log(posts)
    const tagStyles = {
        backgroundColor: theme,
        color: 'red',
        padding: '8px',
        borderRadius: '4px',
    };


    // console.log('theme', theme);///dark
    return (

        <React.Fragment>
            <Header />
            <div className='container'>
                <div className="row">
                    <div className="col-xl-8">
                        {/* /////   [...Array(5)] : заглушка пока posts.items не загружены*/}
                        {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) => isPostsLoading ? (
                            <BlogPost
                                key={index}
                                isLoading={true}
                            />
                        ) : (
                            <BlogPost
                                id={obj._id}
                                title={obj.title}
                                text={obj.text}
                                imageUrl={obj.imageUrl}
                            />
                        )
                        )};
                    </div>
                    <div className="col-xl-4">
                        <div className="tags" style={ tagStyles }>
                            tags
                            {/* <Tags theme={theme} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}
