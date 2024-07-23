import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {
    MoveToInbox as InboxIcon,
    Mail as MailIcon,
    ConfirmationNumber as ConfirmationNumberIcon,
    History as HistoryIcon,
    People as PeopleIcon,
    ManageAccounts as ManageAccountsIcon,
    LiveTv as LiveTvIcon
} from '@mui/icons-material';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ReactComponent as NavIcon1 } from "../../assets/Navbar/NavIcon1.svg"
import { ReactComponent as NavIcon2 } from "../../assets/Navbar/NavIcon2.svg"
import { ReactComponent as NavIcon3 } from "../../assets/Navbar/NavIcon3.svg"
import { ReactComponent as NavIcon4 } from "../../assets/Navbar/NavIcon4.svg"
import { ReactComponent as NavIcon5 } from "../../assets/Navbar/NavIcon5.svg"
import { ReactComponent as NavIcon6 } from "../../assets/Navbar/NavIcon6.svg"
import { ReactComponent as NavIcon7 } from "../../assets/Navbar/NavIcon7.svg"
import { ReactComponent as NavIcon8 } from "../../assets/Navbar/NavIcon8.svg"
import { ReactComponent as NavIcon9 } from "../../assets/Navbar/NavIcon9.svg"


export default function SideMenu(params) {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuData, setMenuData] = useState([
        {
            route_name: 'Upcoming Events',
            route: '/upcoming_events',
            icon: <NavIcon1 />
        },
        {
            route_name: 'Past Events',
            route: '/past_events',
            icon: <NavIcon2 />
        },
        {
            route_name: 'Organizers',
            route: '/organizers',
            icon: <NavIcon3 />
        },
        {
            route_name: 'Account',
            route: '/account',
            icon: <NavIcon4 />
        },
        {
            route_name: 'Account',
            route: '/account',
            icon: <NavIcon5 />
        },
        {
            route_name: 'Account',
            route: '/account',
            icon: <NavIcon6 />
        },
        {
            route_name: 'Account',
            route: '/account',
            icon: <NavIcon7 />
        },
        {
            route_name: 'Account',
            route: '/account',
            icon: <NavIcon8 />
        },
        {
            route_name: 'Account',
            route: '/account',
            icon: <NavIcon9 />
        }
    ]);


    return <>
        <List>
            {menuData.map((item, index) => (
                <ListItem key={item?.route_name} disablePadding
                    sx={{
                        padding: '5px',
                        '&:before': {
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            bottom: 0,
                            width: '5px',
                            backgroundColor: location.pathname === item.route ? '#0B6BC2' : 'transparent',
                            borderRadius: '0px 8px 8px 0px',
                            margin: '5px 0px'
                        }
                    }}
                >
                    <ListItemButton
                        onClick={() => navigate(item.route)}
                        sx={{
                            justifyContent: 'center',
                            backgroundColor: location.pathname === item.route ? '#1976d2' : 'transparent',
                            color: location.pathname === item.route ? '#fff' : '#000',
                            borderRadius: location.pathname === item.route ? '8px' : '0',
                            '&:hover': {
                                backgroundColor: location.pathname === item.route ? '#1565c0' : '#f5f5f5',
                            }
                        }}
                    >
                        <ListItemIcon sx={{ "&.MuiListItemIcon-root": { minWidth: 'unset' }, "& svg": { height: '25px', width: '25px' }, color: location.pathname === item.route ? '#fff' : '#000' }}>
                            {item?.icon}
                        </ListItemIcon>
                        {/* <ListItemText sx={{ "& .MuiTypography-root ": { fontSize: '14px' } }} primary={item.route_name} /> */}
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    </>
}