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
} from '@mui/material';
import { ReactComponent as SearchIcon } from "../../../assets/Header/SearchIcon.svg";
import useCommonStyles from '../../../Styles/CommonStyles';
import { ReactComponent as FilterIcon } from "../../../assets/LandingPage/FilterIcon.svg"

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}



function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const JobCard = ({ title, jobId, totalApplicants, applicantsChange }) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                    #{jobId}
                </Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="body2" component="div">
                        Total Applicants: {totalApplicants}
                    </Typography>
                    <Chip
                        label={`${applicantsChange}% vs Last Month`}
                        color={applicantsChange >= 0 ? 'success' : 'error'}
                        variant="outlined"
                        size="small"
                    />
                </Box>
                <Typography variant="body2" color="text.secondary">
                    6 mins ago
                </Typography>
            </CardContent>
        </Card>
    );
};


export default function JobList(params) {
    const commonStyles = useCommonStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return <Box sx={{
        padding: '10px',
        backgroundColor: '#FFFFFF',
        borderRadius: '5px',
        boxShadow: "4px 4px 25px 0px #00000026"
    }} >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
                >Posted Jobs</Typography>
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

        <Box sx={{ width: '100%' }}>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                    sx={{
                        "& .MuiButtonBase-root.MuiTab-root.Mui-selected": {
                            color: '#3E3E3E',
                            backgroundColor: '#DBEAF3'
                        },
                        "& .MuiTabs-indicator": {
                            display: 'none'
                        },
                        "& .MuiButtonBase-root.MuiTab-root": {
                            textTransform: 'none',
                            color: '#3E3E3E',
                        }
                    }}
                >
                    <Tab label="Active Jobs" {...a11yProps(0)} />
                    <Tab label="Inactive Jobs" {...a11yProps(1)} />
                    <Tab label="Completed Jobs" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
             
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
             
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
         
            </CustomTabPanel>

        </Box>
    </Box>

}
