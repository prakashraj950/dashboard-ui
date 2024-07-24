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
} from '@mui/material';
import { ReactComponent as SearchIcon } from "../../../assets/Header/SearchIcon.svg";
import useCommonStyles from '../../../Styles/CommonStyles';
import { ReactComponent as FilterIcon } from "../../../assets/LandingPage/FilterIcon.svg";
import PythonIcon from "../../../assets/LandingPage/PythonIcon.svg"
import AngularIcon from "../../../assets/LandingPage/AngularIcon.svg"
import JavaIcon from "../../../assets/LandingPage/JavaIcon.svg"
import UiuxIcon from "../../../assets/LandingPage/UiuxIcon.svg"
import { Upcoming } from '@mui/icons-material';
import { ReactComponent as UpIcon } from "../../../assets/LandingPage/UpIcon.svg"

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
            {value === index && <Box sx={{ p: 0, width: '100%' }}>{children}</Box>}
        </div>
    );
}



function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const JobCard = ({ item }) => {
    return (
        <Box sx={{
            height: 320,
            minWidth: 250,
            width: { md: 290, xs: "100%" },
            boxShadow: "4px 4px 25px 0px #00000026",
            borderRadius: '5px',
            backgroundColor: "#FFFFFF",
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center', gap: '10px', padding: '10px 15px', borderBottom: '1px solid #CCC' }}>
                <Stack sx={{ flexGrow: 1 }} direction={"row"} alignItems={"center"} gap={"20px"} >
                    <img src={item.image} style={{ height: '' }} />
                    <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>{item.role}</Typography>
                </Stack>

                <Typography sx={{ fontWeight: 500, fontSize: '14px' }}>#{item.applicant_number}</Typography>
            </Box>

            <Box sx={{ flexGrow: 2, display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
                <Typography sx={{ fontWeight: 400, fontSize: '14px' }}>{item.position}</Typography>
                <Box sx={{
                    padding: '10px', height: '80px',
                    width: 100,
                    color: item.color,
                    backgroundColor: item.backgroundColor,
                    borderRadius: '5px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Typography sx={{ fontSize: "25px" }} >258</Typography>
                </Box>
                <Typography sx={{ fontWeight: 400, fontSize: '14px' }}>Total Applicants</Typography>
            </Box>

            <Box sx={{ flexGrow: 1, padding: '5px 20px', borderTop: '1px solid #CCC', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Stack sx={{ flexGrow: 1 }} direction={"row"} alignItems={"center"} gap={"5px"} >
                    <Typography sx={{ fontSize: '12px', color: '#0A66C2' }}><UpIcon /> </Typography>
                    <Typography sx={{ fontSize: '12px', color: '#3E3E3E' }} ><span style={{ fontSize: '12px', color: '#0A66C2' }}>{item.last_month_progress}%</span> vs Last month</Typography>
                </Stack>
                <Typography sx={{ fontSize: '12px', color: '#3E3E3E' }}>{item?.updatedAt}</Typography>
            </Box>
        </Box>
    );
};


export default function JobList(params) {
    const commonStyles = useCommonStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const data = [
        {
            role: 'Python Developers', position: 'Senior Developers', count: 258, updatedAt: '9 min ago', last_month_progress: 28, applicant_number: '0123',
            image: PythonIcon,
            backgroundColor: '#D9E4EF',
            color: "#0A66C2"
        },
        {
            role: 'Angular Developers', position: 'Senior Developers', count: 258, updatedAt: '9 min ago', last_month_progress: 28, applicant_number: '0123',
            image: AngularIcon,
            backgroundColor: '#73A1FB',
            color: "#FFFFFF"
        },
        {
            role: 'Java Developers', position: 'Senior Developers', count: 258, updatedAt: '9 min ago', last_month_progress: 28, applicant_number: '0123',
            image: JavaIcon,
            backgroundColor: '#2F73A0',
            color: "#FFFFFF"
        },
        {
            role: 'UX/UI Designers', position: 'Senior Developers', count: 258, updatedAt: '9 min ago', last_month_progress: 28, applicant_number: '0123',
            image: UiuxIcon,
            backgroundColor: '#0A66C2',
            color: "#FFFFFF"
        },
    ];

    return <Box sx={{
        padding: '10px 10px 20px 10px',
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
                <Box className="customScroll" sx={{ width: '100%', display: 'flex', padding: '20px', overflowX: 'auto', gap: '20px' }}>
                    {data.map((ival) => {
                        return <JobCard
                            item={ival}
                        />
                    })}

                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Box className="customScroll" sx={{ width: '100%', display: 'flex', padding: '20px', overflowX: 'auto', gap: '20px' }}>
                    {data.map((ival) => {
                        return <JobCard
                            item={ival}
                        />
                    })}
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Box className="customScroll" sx={{ width: '100%', display: 'flex', padding: '20px', overflowX: 'auto', gap: '20px' }}>
                    {data.map((ival) => {
                        return <JobCard
                            item={ival}
                        />
                    })}
                </Box>
            </CustomTabPanel>

        </Box>
    </Box>

}
