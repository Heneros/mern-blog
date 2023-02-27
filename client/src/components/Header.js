import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <>
            <Box sx={{ display: 'flex', textAlign: 'right', justifyContent: 'right' }}>
                <Typography sx={{ minWidth: 100 }}>
                    <Link to="/registration">Text 1</Link>
                </Typography>
                <Typography sx={{ minWidth: 100 }}>Text 2</Typography>
            </Box>
        </>
    )
}

export default Header;
