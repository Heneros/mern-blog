import * as React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsAuth } from '../redux/slices/auth';
import { Button } from '@mui/material';


function Header() {
    const isAuth = useSelector(selectIsAuth);

    const dispatch = useDispatch();



    const onClickLogout = () => {
        if (window.confirm("Are you sure you want to log out")) {
            dispatch(logout());
            window.localStorage.removeItem('token');
        }
    }

    return (
        <>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                        <Link to="/">
                            Blog Site
                        </Link>
                    </Typography>
                    <nav>
                        <Box sx={{ display: 'inline-flex', flexDirection: 'row' }}>
                            {isAuth ? (
                                <>
                                    <Typography sx={{ mx: 1.5 }}>
                                        <Button className="link-header" onClick={onClickLogout} >
                                            Log Out
                                        </Button>
                                    </Typography>
                                    <Typography sx={{ mx: 1.5 }}>
                                        <Link className="link-header" to="/create-post">Create Post</Link>
                                    </Typography>
                                </>
                            ) : (
                                <>
                                    <Typography sx={{ my: 1, mx: 1.5 }} >
                                        <Link to="/login">Log In</Link>
                                    </Typography>
                                    <Typography sx={{ my: 1, mx: 1.5 }}>
                                        <Link to="/registration">Sign Up</Link>
                                    </Typography>
                                </>
                            )}
                        </Box>
                    </nav>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;
