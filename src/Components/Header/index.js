import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

// import LogoImage from "../../assets/Login/LogoImage.png";
import { IconButton, InputAdornment, Menu, MenuItem, TextField } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import SideMenu from '../SideMenu';
import { ReactComponent as Logo } from "../../assets/Header/Logo.svg"
import { ReactComponent as SearchIcon } from "../../assets/Header/SearchIcon.svg"
import { ReactComponent as ProfileIcon } from "../../assets/Header/ProfileIcon.svg"
import { ReactComponent as DayModeIcon } from "../../assets/Header/DayModeIcon.svg"
import { ReactComponent as SurfaceIcon } from "../../assets/Header/SurfaceIcon.svg"
import { ReactComponent as NotificationIcon } from "../../assets/Header/NotificationIcon.svg"
import { ReactComponent as ChatIcon } from "../../assets/Header/ChatIcon.svg"
import { ReactComponent as SettingsIcon } from "../../assets/Header/SettingsIcon.svg"


import useCommonStyles from '../../Styles/CommonStyles';



const drawerWidth = 80;
export default function Header({ children, openBar = true }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();
    const commonStyles = useCommonStyles()
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
            <AppBar position="fixed" sx={{ backgroundColor: "#FFFFFF", justifyContent: 'center', boxShadow: "4px 4px 25px 0px #00000026", height: '80px', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar sx={{ minHeight: 80 }}>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <Logo />

                        <TextField
                            placeholder='Search'
                            className={commonStyles.headerInput}
                            sx={{ marginLeft: { md: '80px', sm: '80px', xl: '100px' } }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <IconButton>
                            <DayModeIcon style={{ height: "18px" }} />
                        </IconButton>

                        <IconButton>
                            <SurfaceIcon style={{ height: "18px" }} />
                        </IconButton>

                        <IconButton>
                            <ChatIcon style={{ height: "18px" }} />
                        </IconButton>

                        <IconButton>
                            <NotificationIcon style={{ height: "18px" }} />
                        </IconButton>

                        <IconButton>
                            <SettingsIcon style={{ height: "18px" }} />
                        </IconButton>

                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"

                            color="inherit"
                        >
                            <ProfileIcon />
                        </IconButton>

                    </Box>


                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                anchor="left"
                open={openBar}
                sx={{
                    width: openBar ? drawerWidth : 0,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: openBar ? drawerWidth : 0,
                        boxSizing: 'border-box',
                        marginTop: "145px",
                        background: "#FFFFFF",
                        boxShadow: "4px 4px 25px 0px #00000026",
                        height: "100%",
                        borderRadius: "0px 40px 0px 0px",
                    },
                    // backgroundColor: '#FFFFFF',

                }}
            >
                {/* <Toolbar /> */}
                <Box sx={{ overflow: 'auto' }}>
                    {/* <Divider /> */}

                    <SideMenu />
                </Box>
            </Drawer>



            <Box component="main" sx={{ flexGrow: 1, px: 4, py: 3, width: `calc(100% - ${drawerWidth}px)` }}>
                {/* <Toolbar  /> */}
                <Box sx={{ mt: '145px' }}>

                    {children}
                </Box>
            </Box>


        </Box >
    );
}