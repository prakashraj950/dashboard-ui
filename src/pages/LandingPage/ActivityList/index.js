import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

import UserOne from "../../../assets/LandingPage/UserOne.png"
import UserTwo from "../../../assets/LandingPage/UserTwo.png"
import UserThree from "../../../assets/LandingPage/UserThree.png"

const interviews = [
    {
        role: '[Python Developer]',
        name: 'John Doe',
        interviewer: 'Stella',
        time: '10 min ago',
        image: UserOne
    },
    {
        role: '[Python Developer]',
        name: 'John Doe',
        interviewer: 'Stephan',
        time: '10 min ago',
        image: UserTwo
    },
    {
        role: '[Python Developer]',
        name: 'John Doe',
        interviewer: 'Stella',
        time: '10 min ago',
        image: UserThree
    },
];



export default function ActivityList() {
    return (
        <List>
            {interviews.map((interview) => (
                <ListItem key={interview.name} sx={{ px: '0px', gap: '10px' }}>
                    <ListItemAvatar >
                        <Avatar
                            src={interview.image}
                            sx={{ height: 62, width: 62 }}
                        />
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <Typography sx={{ fontSize: "14px", fontWeight: 500, color: '#3E3E3E' }}>
                                {interview.name} <span style={{ color: '#0B74AD' }}>{interview.role}</span>
                            </Typography>
                        }
                        secondary={
                            <Box>
                                <Typography sx={{ fontSize: "12px", fontWeight: 400, color: '#3E3E3E' }}>
                                    Interview with <span style={{}}>{interview.interviewer}</span>
                                </Typography>
                                <Typography sx={{ fontSize: "10px", fontWeight: 400, color: '#3E3E3E' }}>
                                    {`${interview.time}`}
                                </Typography>
                            </Box>
                        }
                    />
                </ListItem>
            ))}
        </List>
    );
}

