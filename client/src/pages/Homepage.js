import React from 'react'

import Header from '../components/Header';
import { BlogPosts } from '../components/BlogPosts';
import { Outlet } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';

export default function HomePage() {

    // console.log('theme', theme);///dark
    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <Outlet />
            </div>
        </React.Fragment>

    )
}
