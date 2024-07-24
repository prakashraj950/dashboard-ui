import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    Box,
    Chip,
    InputAdornment,
    TextField,
    Button,
    Tabs,
    Tab,
    Stack,
    Paper,
} from '@mui/material';
import { ReactComponent as SearchIcon } from "../../../assets/Header/SearchIcon.svg";
import useCommonStyles from '../../../Styles/CommonStyles';
import { ReactComponent as FilterIcon } from "../../../assets/LandingPage/FilterIcon.svg";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ReactComponent as EyeIcon } from "../../../assets/LandingPage/EyeIcon.svg"

export default function CandidateList(params) {
    const commonStyles = useCommonStyles();

    const tableData = [
        {
            jobId: '#001',
            name: 'John Doe',
            position: 'Designer',
            firstLevel: '6/10',
            secondLevel: '7/10',
            thirdLevel: '3/10',
            fourthLevel: '...',
            totalMarks: '...',
            status: 'Active',
            actions: <EyeIcon />,
        },
        {
            jobId: '#002',
            name: 'John Doe',
            position: 'Designer',
            firstLevel: '6/10',
            secondLevel: '7/10',
            thirdLevel: '3/10',
            fourthLevel: '...',
            totalMarks: '...',
            status: 'Active',
            actions: <EyeIcon />,
        },
        {
            jobId: '#003',
            name: 'John Doe',
            position: 'Designer',
            firstLevel: '6/10',
            secondLevel: '7/10',
            thirdLevel: '3/10',
            fourthLevel: '...',
            totalMarks: '...',
            status: 'Active',
            actions: <EyeIcon />,
        },
        {
            jobId: '#004',
            name: 'John Doe',
            position: 'Designer',
            firstLevel: '6/10',
            secondLevel: '7/10',
            thirdLevel: '3/10',
            fourthLevel: '...',
            totalMarks: '...',
            status: 'Active',
            actions: <EyeIcon />,
        },
        {
            jobId: '#005',
            name: 'John Doe',
            position: 'Designer',
            firstLevel: '6/10',
            secondLevel: '7/10',
            thirdLevel: '3/10',
            fourthLevel: '...',
            totalMarks: '...',
            status: 'Active',
            actions: <EyeIcon />,
        },
        {
            jobId: '#006',
            name: 'John Doe',
            position: 'Designer',
            firstLevel: '6/10',
            secondLevel: '7/10',
            thirdLevel: '3/10',
            fourthLevel: '...',
            totalMarks: '...',
            status: 'Active',
            actions: <EyeIcon />,
        },
        {
            jobId: '#007',
            name: 'John Doe',
            position: 'Designer',
            firstLevel: '6/10',
            secondLevel: '7/10',
            thirdLevel: '3/10',
            fourthLevel: '...',
            totalMarks: '...',
            status: 'Active',
            actions: <EyeIcon />,
        },

    ];


    return <Box sx={{
        padding: '20px 10px 0px 10px',
        backgroundColor: '#FFFFFF',
        borderRadius: '5px',
        boxShadow: "4px 4px 25px 0px #00000026",
        width: '100%'
    }} >
        <Box sx={{ display: 'flex', padding: '0px 20px', justifyContent: 'space-between' }}>
            <Box sx={{
                display: 'flex', alignItems: 'center',
                gap: { xs: '10px', sm: '25px', md: '40px' },
                justifyContent: { xs: 'space-between' }

            }}

            >
                <Typography
                    sx={{
                        color: '#3E3E3E',
                        fontWeight: 600,
                        fontSize: '22px'
                    }}
                >Candidate Status</Typography>
                <Typography sx={{ color: '#0A66C2', textDecoration: 'underline' }}>View All</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: 'center', gap: '20px' }}>
                <TextField
                    placeholder='Search'
                    className={commonStyles.headerInput}
                    // sx={{ marginLeft: { md: '80px', sm: '80px', xl: '100px' } }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        )
                    }}
                />

                <Button sx={{ display: 'flex', backgroundColor: '#FFFFFF', color: '#000000', boxShadow: '4px 4px 25px 0px #00000026', alignItems: 'center', padding: "10px" }}
                    startIcon={<FilterIcon />}
                >
                    Filter
                </Button>
            </Box>

        </Box>

        <Box sx={{ width: '100%', padding: '20px' }}>
            <TableContainer component={Paper} elevation={0}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{
                            backgroundColor: '#F5F5F5',
                            "& .MuiTableCell-root.MuiTableCell-head": {
                                borderBottom: '1px solid #000000'
                            }
                        }}>
                            <TableCell>Job ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Position</TableCell>
                            <TableCell>1st Level</TableCell>
                            <TableCell>2nd Level</TableCell>
                            <TableCell>3rd Level</TableCell>
                            <TableCell>4th Level</TableCell>
                            <TableCell>Total Marks</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map((row) => (
                            <TableRow key={row.jobId}>
                                <TableCell>{row.jobId}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.position}</TableCell>
                                <TableCell>{row.firstLevel}</TableCell>
                                <TableCell>{row.secondLevel}</TableCell>
                                <TableCell>{row.thirdLevel}</TableCell>
                                <TableCell>{row.fourthLevel}</TableCell>
                                <TableCell>{row.totalMarks}</TableCell>
                                <TableCell>
                                    <Box sx={{ backgroundColor: "#FFF9EC", textAlign: 'center', color: '#F5C961', padding: '2px 10px', borderRadius: '2px' }}>
                                        {row.status}
                                    </Box>
                                </TableCell>
                                <TableCell>{row.actions}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    </Box>
}