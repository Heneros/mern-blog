import * as React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';


function Header() {
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
                            <Typography sx={{ my: 1, mx: 1.5 }}>
                                <Link to="/registration">Sign Up</Link>
                            </Typography>
                            <Typography sx={{ my: 1, mx: 1.5 }} >
                                Log In
                            </Typography>
                        </Box>
                    </nav>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;
