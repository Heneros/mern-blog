import React from 'react'
import BlogPosts from './BlogPosts'
import Header from './Header'

export default function HomePage() {
    return (
        <>
            <Header />
            <div className='container'>
                <BlogPosts />
            </div>
        </>

    )
}
