import React from 'react'
import { BlogPost } from '../components/BlogPost';

import { useState } from 'react';
import { useParams } from 'react-router-dom'


import axios from '../axios';
import Header from '../components/Header';


export default function SinglePost() {
    const { id } = useParams();
    const [data, setData] = useState();


    React.useEffect(() => {
        axios
            .get(`/posts/${id}`)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.warn(err + `Error`);
                // alert(`Error`);
            })
    }, []);

    return (
        <>
            <p>
                {data?.text}
            </p>

        </>
    )
}
