import React from 'react'
import BlogPosts from '../components/BlogPosts'
import Header from '../components/Header'
import CreatePost from '../components/CreatePost'
export default function HomePage() {
    return (
        <>
            <Header />
            <div className='container'>

                <div className="row">
                    <div className="col-xl-8">
                        <BlogPosts />
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
