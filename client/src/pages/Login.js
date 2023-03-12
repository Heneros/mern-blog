import { TextField, Typography } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { fetchAuth, selectIsAuth } from '../redux/slices/auth'

export const Login = () => {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();

    const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({
        defaultValues: {
            email: 'gfreeman@gmail.com',
            password: ''
        },
        mode: 'onChange'
    })

    const onSubmit = async (values) => {
        const data = await dispatch(fetchAuth(values));
        if (!data.payload) {
            return alert('Failed to log in');
        }

        if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token)
        } else {
            alert('Failed to log in.')
        }
        dispatch(fetchAuth(values))
    }

    if (isAuth) {
        return <Navigate to="/" />
    }
    return (<>
        <div className='container'>
            <Typography>
                Login Page
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="E-mail"
                    error={Boolean(errors.email?.message)}
                    helperText={errors.email?.message}
                    {...register('email', { required: 'Enter Email' })}
                    type="email"
                    fullWidth
                />
            </form>
        </div>
    </>
    )
}
