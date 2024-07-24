import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box, ListItemButton } from '@mui/material';

import Candidate1 from "../../../assets/LandingPage/Candidate1.png"
import Candidate2 from "../../../assets/LandingPage/Candidate2.png"
import Candidate3 from "../../../assets/LandingPage/Candidate3.png"
import Candidate4 from "../../../assets/LandingPage/Candidate4.png"
import Candidate5 from "../../../assets/LandingPage/Candidate5.png"

const profileData = [
    {
        name: 'John Doe',
        position: 'Senior Python Developer',
        hiredBy: 'Stella',
        image: Candidate1
    },
    {
        name: 'John Doe',
        position: 'Senior Python Developer',
        hiredBy: 'Stella',
        image: Candidate2
    },
    {
        name: 'John Doe',
        position: 'Senior Python Developer',
        hiredBy: 'Stella',
        image: Candidate5
    },
    {
        name: 'John Doe',
        position: 'Senior Python Developer',
        hiredBy: 'Stella',
        image: Candidate3
    },
    {
        name: 'John Doe',
        position: 'Senior Python Developer',
        hiredBy: 'Stella',
        image: Candidate4
    }
];



export default function HiringCandidate() {
    return (
        <List>
            {profileData.map((item) => (
                <ListItem key={item.name} sx={{ px: '0px', gap: '10px' }}>
                    <ListItemAvatar >
                        <Avatar
                            src={item.image}
                            sx={{ height: 62, width: 62 }}
                        />
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <Typography sx={{ fontSize: "14px", fontWeight: 500, color: '#3E3E3E' }}>
                                {item.name}
                            </Typography>
                        }
                        secondary={
                            <Box>
                                <Typography sx={{ fontSize: "12px", fontWeight: 400, color: '#3E3E3E' }}>
                                    {item.position}
                                </Typography>
                                <Typography sx={{ fontSize: "10px", fontWeight: 400, color: '#3E3E3E' }}>
                                    Hired by  {`${item.hiredBy}`}
                                </Typography>
                            </Box>
                        }
                    />
                     <Button variant="outlined" size="small" sx={{ fontSize: '12px' }}>Details</Button>
                </ListItem>
            ))}
        </List>
    );
}

