import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from './HomeIcon';
import InfoIcon from '@mui/icons-material/Info';
// Import { Link } here //
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <AppBar position='relative'>
            <Toolbar>
                <IconButton color='inherit'>
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6' style={{ flexGrow: '1' }}>
                    FakeCars.com
                </Typography>
                <ul className='nav-list'>
                    <li className='nav-list-item'>
                        {/* Add Link here */}
                        <Link to='/'>
                            <HomeIcon />
                        </Link>
                    </li>
                    <li className='nav-list-item'>
                        {/* Add Link here */}
                        <Link to='/About'>
                            <InfoIcon />
                        </Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;