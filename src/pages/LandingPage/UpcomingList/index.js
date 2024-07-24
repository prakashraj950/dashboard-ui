import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

const interviews = [
    {
        date: '07 Feb',
        title: 'Interview with Designer',
        createdBy: 'Stella',
        time: '10 A.M to 11 A.M',
    },
    {
        date: '07 Feb',
        title: 'Interview with PMO',
        createdBy: 'Stephan',
        time: '10 A.M to 11 A.M',
    },
    {
        date: '07 Feb',
        title: 'Interview with Net. Admin',
        createdBy: 'Stella',
        time: '10 A.M to 11 A.M',
    },
];



export default function UpcomingList() {
    return (
        <List>
            {interviews.map((interview) => (
                <ListItem key={interview.title} sx={{ px: '0px', gap: '10px' }}>
                    <ListItemAvatar >
                        <Box sx={{
                            background: "#0B74AD26", padding: '5px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '5px',
                            textAlign: 'center',
                            height: 54, width: 54,
                            color: "#0B74AD"
                        }}>
                            {interview.date}
                        </Box>
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <Typography sx={{ fontSize: "14px", fontWeight: 500, color: '#3E3E3E' }}>
                                {`${interview.date} - ${interview.title}`}
                            </Typography>
                        }
                        secondary={
                            <Box>
                                <Typography sx={{ fontSize: "12px", fontWeight: 400, color: '#3E3E3E' }}>
                                    Created by <span style={{ color: '#0B74AD' }}>{interview.createdBy}</span>
                                </Typography>
                                <Typography sx={{ fontSize: "10px", fontWeight: 400, color: '#3E3E3E' }}>
                                    {`${interview.time}`}
                                </Typography>
                            </Box>
                        }
                    />
                    <Button variant="contained" size="small" sx={{ fontSize: '12px' }}>Details</Button>
                </ListItem>
            ))}
        </List>
    );
}

