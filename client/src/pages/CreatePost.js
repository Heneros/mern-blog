import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import { selectIsAuth } from '../redux/slices/auth';
import { Button } from '@mui/material';
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
    
    return (
        <>
            <Header />
            <div>
                <Button onClick={() => inputFileRef.current.click()}>
                    Load Image
                </Button>
                <input ref={inputFileRef} type='file' onChange={handleChangeFile} />
            </div>
        </>

    )
}
