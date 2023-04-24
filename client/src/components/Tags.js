import React from 'react'
import { SideBlock } from './elements/SideBlock';
import { List, ListItemText } from '@mui/material';

export default function Tags({ items, theme }) {

    return (
        <SideBlock >
            <List>
                {/* {items.map(name, i) =>(
                <ListItemText>

                </ListItemText>
                )} */}
                {/* {(items).map(name, i) =>(
                <a href={`/tags/${name}`}>
                    <ListItemText primary={name} />
                </a>
)} */}
            </List>
        </SideBlock>
    )
}
