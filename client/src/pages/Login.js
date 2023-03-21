import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { fetchAuth, selectIsAuth } from '../redux/slices/auth'
import Header from '../components/Header';

export const Login = () => {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();

    const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({
        defaultValues: {
            email: 'freeman@gmail.com',
            password: '123dadaya'
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
    return (
        <>
            <Header />
            <Container component="main" maxWidth="xs" sx={{ mt: 5 }}>
                <Typography>
                    Login Page
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                label="E-mail"
                                error={Boolean(errors.email?.message)}
                                helperText={errors.email?.message}
                                {...register('email', { required: 'Enter Email' })}
                                type="email"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                label="Password"
                                error={Boolean(errors.password?.message)}
                                helperText={errors.password?.message}
                                {...register('password', { required: 'Enter Password' })}
                                type="password"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Button type="submit" size='large' fullWidth variant="outlined">
                                Log In
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}
