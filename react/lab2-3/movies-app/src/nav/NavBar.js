import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import AddBoxIcon from '@mui/icons-material/AddBox';



const label = { inputProps: { 'aria-label': 'Switch demo' } };
function ResponsiveAppBar(props) {
   

    
    return (
        <AppBar position="static" className='appbar'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AddBoxIcon sx={{ color: 'white', fontSize: 40 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Todo App
                    </Typography>
                    <Switch {...label} defaultChecked color="warning"
                    onChange={props.change}
                    checked={props.checked}
                    label="Dark Mode" 
                    
                    
                    /> 


                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;