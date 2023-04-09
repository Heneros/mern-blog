import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import Header from '../components/Header';
import { fetchRegister, selectIsAuth } from '../redux/slices/auth';
import { Navigate } from 'react-router-dom';

export default function Registration() {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        defaultValues: {
            fullName: 'Gordon',
            email: 'freeman@gmail.com',
            password: '123dadaya'
        },
        mode: 'onChange'
    });

    const onSubmit = async (values) => {
        const data = await dispatch(fetchRegister(values));
        console.log(data);
        if (!data.payload) {
            return alert('Failed to log in.');
        }
        if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token)
        }
    }
    if (isAuth) {
        return <Navigate to="/" />
    }


    return (
        <>
            <Header />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 8 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="fullName"
                                    required
                                    fullWidth
                                    id="fullName"
                                    label="First Name"
                                    autoFocus
                                    {...register('fullName', { required: 'Enter fullName' })}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    type="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="Email"
                                    {...register('email', { required: 'Enter email' })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    {...register('password', { required: 'Enter password' })}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            sx={{ display: 'flex', mt: 2, justifyContent: 'center' }}
                            type="submit"
                            fullWidth
                            variant='outlined'
                            color="success">Sign up</Button>
                    </Box>
                </Box>
            </Container>
        </>
    )
}
