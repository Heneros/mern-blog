import React from 'react'
import BlogPost from './BlogPost'
import Header from './Header'

export default function HomePage() {
    return (
        <>
            <Header />
            <div className='container'>
                <BlogPost />
            </div>
        </>

    )
}
