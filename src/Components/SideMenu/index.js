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


export default function SideMenu(params) {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuData, setMenuData] = useState([
        {
            route_name: 'Upcoming Events',
            route: '/upcoming_events',
            icon: <ConfirmationNumberIcon />
        },
        {
            route_name: 'Past Events',
            route: '/past_events',
            icon: <HistoryIcon />
        },
        {
            route_name: 'Organizers',
            route: '/organizers',
            icon: <PeopleIcon />
        },
        {
            route_name: 'Account',
            route: '/account',
            icon: <ManageAccountsIcon />
        }
    ]);


    return <>
        <List>
            {menuData.map((item, index) => (
                <ListItem key={item?.route_name} disablePadding
                    sx={{
                        padding: '5px 15px',
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
                            backgroundColor: location.pathname === item.route ? '#1976d2' : 'transparent',
                            color: location.pathname === item.route ? '#fff' : '#000',
                            borderRadius: location.pathname === item.route ? '8px' : '0',
                            '&:hover': {
                                backgroundColor: location.pathname === item.route ? '#1565c0' : '#f5f5f5',
                            }
                        }}
                    >
                        <ListItemIcon sx={{ color: location.pathname === item.route ? '#fff' : '#000' }}>
                            {item?.icon}
                        </ListItemIcon>
                        <ListItemText sx={{ "& .MuiTypography-root ": { fontSize: '14px' } }} primary={item.route_name} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    </>
}