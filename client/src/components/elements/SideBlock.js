import { Paper, Typography } from '@mui/material'
import React from 'react'

export const SideBlock = ({ title, children }) => {
    return (
        <Paper>
            <Typography variant="h6" >
                {title}
            </Typography>
            {children}
        </Paper>
    )
}
