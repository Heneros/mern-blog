import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import { selectIsAuth } from '../redux/slices/auth';


export default function CreatePost() {
    const { id } = useParams();
    const navigate = useNavigate();
    const isAuth = useSelector(selectIsAuth);
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const inputFileRef = useRef(null);
    const isEditing = Boolean(id);

    const handleChangeFile = async (event) => {

    };
    return (
        <>
            <Header />
            <div>CreatePost</div>
        </>

    )
}
