// InterviewCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Button, Table, TableBody, TableCell, TableRow, TableContainer, Paper, Box, Stack, IconButton } from '@mui/material';
import { CalendarToday, AccessTime, BorderBottom, MoreVert as MoreVertIcon } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import useCommonStyles from '../../../Styles/CommonStyles';
import John from "../../../assets/LandingPage/John.png"
import Maria from "../../../assets/LandingPage/Maria.png"
import { ReactComponent as ClockIcon } from "../../../assets/LandingPage/TimeIcon.svg";
import { ReactComponent as CalenIcon } from "../../../assets/LandingPage/CalanIcon.svg"

const useStyles = makeStyles({
    tableCell: {
        borderRight: '1px solid #e0e0e0', // Adding border to each TableCell
        borderCollapse: 'collapse',
        "&:last-child": {
            borderRight: "none"
        }
    },

    tableContainer: {
        borderRadius: '4px',
    },
    table: {
        "& td:last-child": {
            BorderBottom: 0
        }
    }
});

const InterviewCard = ({ interview }) => {
    const classes = useStyles();


    return (
        <Box style={{ padding: '16px', minWidth: 700 }}>
            <TableContainer component={Paper} variant="outlined" className={classes.tableContainer}>
                <Table className={classes.table}>
                    <TableBody sx={{
                        "& tr:last-child": {
                            "& td": {
                                borderBottom: 0
                            }
                        }
                    }}>
                        <TableRow>
                            <TableCell style={{ width: '250px', textAlign: 'center' }} className={classes.tableCell}>
                                <CardMedia
                                    component="img"
                                    image={interview.image}
                                    alt={interview.name}
                                    style={{
                                        borderRadius: '50%', width: '80px', height: '80px', margin: 'auto',
                                        border: '1px solid #0A66C2'
                                    }}
                                />
                                <Typography variant="h6" component="div" style={{ marginTop: '8px' }}>
                                    {interview.name}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {interview.title}
                                </Typography>
                            </TableCell>

                            <TableCell sx={{ padding: 0 }}>
                                <Table sx={{ height: '100%', width: '100%', "& tr:last-child": { border: 0 }, }}>
                                    <TableBody sx={{
                                        "& tr:last-child": {
                                            "& td": {
                                                borderBottom: 0
                                            }
                                        }
                                    }}>
                                        {interview.levels.map((level, index) => (
                                            <TableRow key={index} sx={{

                                            }}>
                                                <TableCell className={classes.tableCell}>{level.level}: {level.score}</TableCell>
                                                <TableCell >Interviewer: {level.interviewer}</TableCell>
                                            </TableRow>
                                        ))}
                                        <TableRow sx={{

                                        }}>
                                            <TableCell className={classes.tableCell}>Meet Via: {interview.meetVia}</TableCell>
                                            <TableCell className={classes.tableCell}>Attendees: {interview.attendee}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className={classes.tableCell} style={{ textAlign: 'center', padding: 1 }}>
                                <Grid container columnSpacing={1}  >

                                    <Grid item sm={6} xs={6} sx={{ borderRight: '1px solid #CCC' }} display={"flex"} justifyContent={"center"}>
                                        <Box>
                                            <CalenIcon fontSize="small" />
                                            <Typography variant="body2" sx={{ color: '#0A66C2' }}>{interview.date}</Typography>
                                        </Box>
                                    </Grid>

                                    <Grid item sm={6} xs={6} display={"flex"} justifyContent={"center"}>
                                        <Box>
                                            <ClockIcon fontSize="small" />
                                            <Typography variant="body2" sx={{ color: '#0A66C2' }}>{interview.time}</Typography>
                                        </Box>
                                    </Grid>

                                </Grid>
                            </TableCell>

                            <TableCell className={classes.tableCell} sx={{ padding: 0 }}>
                                <Stack direction={"row"} justifyContent={"center"} sx={{
                                    "& .column": {
                                        height: '100%',
                                        padding: '10px',
                                        width: {
                                            sm: 190
                                        }
                                    },
                                }}>
                                    <Box className="column" sx={{}}>
                                        <Button variant="outlined" color="primary" fullWidth>
                                            Reschedule Meeting
                                        </Button>
                                    </Box>

                                    <Box className="column" sx={{}}>
                                        <Button variant="contained" color="primary" fullWidth>
                                            Join Meeting
                                        </Button>
                                    </Box>
                                </Stack>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box >

    );
};







const interviewData = [
    {
        name: 'John Smith',
        title: 'Senior Python Developer',
        date: '19th Feb 2024',
        time: '10:30 A.M',
        image: John,
        levels: [
            { level: '1st Level', score: '7/10', interviewer: 'Stella' },
            { level: '2nd Level', score: '6/10', interviewer: 'Smith' },
            { level: '3rd Level', score: 'Waiting', interviewer: 'Stephan' },
        ],
        meetVia: 'G-Meet',
        attendee: 'Johnson'
    },
    {
        name: 'Maria',
        title: 'Senior Python Developer',
        date: '19th Feb 2024',
        time: '10:30 A.M',
        image: Maria,
        levels: [
            { level: '1st Level', score: '7/10', interviewer: 'Stella' },
            { level: '2nd Level', score: '6/10', interviewer: 'Smith' },
            { level: '3rd Level', score: 'Waiting', interviewer: 'Stephan' },
        ],
        meetVia: 'G-Meet',
        attendee: 'Johnson'
    }
];

const InterviewList = () => {
    const commonStyles = useCommonStyles()
    return (
        <Box sx={{ width: '100%', padding: '10px', borderRadius: '10px', backgroundColor: '#FFF', boxShadow: "4px 4px 25px 0px #00000026", border: "0px solid #D6D6D6" }} >
            <Box sx={{ padding: '10px 20px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #CCC' }}>
                <Typography className={commonStyles.BoxTitle} >
                    Today Interviews Meetings Info
                </Typography>

                <IconButton>
                    <MoreVertIcon ></MoreVertIcon>
                </IconButton>
            </Box>

            <Box className="customScroll" sx={{ width: '100%', display: 'flex', overflowX: 'auto', gap: '10px' }}>

                {interviewData.map((interview, index) => (
                    <InterviewCard key={index} interview={interview} />
                ))}
            </Box>
        </Box>
    );
};

export default InterviewList;
