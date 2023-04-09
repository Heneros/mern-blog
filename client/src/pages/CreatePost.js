import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, Navigate, useParams } from 'react-router-dom';
import SimpleMDE from 'react-simplemde-editor';
import { Button, TextField } from '@mui/material';


import Header from '../components/Header';
import { selectIsAuth } from '../redux/slices/auth';
import axios from '../axios';


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
        try {
            const formData = new FormData();
            const file = event.target.files[0];
            formData.append('image', file);
            const { data } = await axios.post('/upload', formData);
            setImageUrl(data.url); //сохранение в переменной setImageUrl
        } catch (err) {
            console.warn(err);
        }
    };

    useEffect(() => {
        if (id) {
            axios
                .get(`/posts/${id}`).then(({ data }) => {
                    setTitle(data.title);
                    setText(data.text);
                    setImageUrl(data.imageUrl);
                    setTags(data.tags).join(',');
                })
                .catch((err) => {
                    console.warn(err);
                })
        }
    }, []);

    const onClickRemoveImage = () => {
        setImageUrl('');
    }

    const onChange = useCallback((value) => {
        setText(value)
    }, []);

    if (!window.localStorage.getItem('token') && !isAuth) {
        return <Navigate to="/" />
    }

    const onSubmit = async () => {
        try {
            const fields = {
                title,
                text,
                imageUrl,
                tags
            };
            const { data } = isEditing
                ? await axios.patch(`/posts/${id}`, fields)
                : await axios.post(`/posts/${id}`, fields)
            const _id = isEditing ? id : data._id;
            navigate(`/posts/${_id}`);
        } catch (err) {
            console.warn(err);
        }
    }

    return (
        <>
            <Header />
            <div>
                <Button onClick={() => inputFileRef.current.click()}>
                    Load Image
                </Button>
                <input ref={inputFileRef} type='file' onChange={handleChangeFile} />
                <br />
                <br />
                <TextField
                    variant='standard'
                    placeholder="Title post..."
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    variant='standard'
                    placeholder="Tags post..."
                    fullWidth
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                />
                <SimpleMDE value={text} />
            </div>
        </>

    )
}
