import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

// import LogoImage from "../../assets/Login/LogoImage.png";
import { IconButton, Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import SideMenu from '../SideMenu';


const drawerWidth = 240;

export default function Header({ children, openBar = true }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();
    // const userDetails = getUserDetails();


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Box sx={{ display: 'flex', height: '100%', width: '100%' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ backgroundColor: "#232A33", zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        {/* <img src={LogoImage} style={{}} /> */}
                    </Box>

                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <AccountCircle />
                                <Box sx={{ textAlign: 'left' }}>
                                    <Typography sx={{ fontSize: '14px', color: "#FFFFFF", fontWeight: 700 }}>{'jj'}</Typography>
                                    <Typography sx={{ fontSize: '12px', color: "#FFFFFF" }}>{"admin"}</Typography>
                                </Box>
                            </Box>
                        </IconButton>

                    </div>


                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                anchor="left"
                open={openBar}
                sx={{
                    width: openBar ? drawerWidth : 0,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: openBar ? drawerWidth : 0, boxSizing: 'border-box' },
                    backgroundColor: '#FFFFFF',

                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    {/* <Divider /> */}

                    <SideMenu />
                </Box>
            </Drawer>



            <Box component="main" sx={{ flexGrow: 1, p: 3, width: `calc(100% - ${drawerWidth}px)` }}>
                <Toolbar />

                {children}
            </Box>


        </Box>
    );
}