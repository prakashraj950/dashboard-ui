import { Typography, Grid, Box, Select, MenuItem, Button } from "@mui/material";
import { Expand } from "@mui/icons-material"
import useCommonStyles from "../../Styles/CommonStyles";
import { ReactComponent as DownArrowIcon } from "../../assets/LandingPage/DownArrow.svg"
import { ReactComponent as FileIcon } from "../../assets/LandingPage/FileIcon.svg"
import { ReactComponent as Office_girl_2 } from "../../assets/LandingPage/Office_girl_2.svg"
import { ReactComponent as Office_girl_1 } from "../../assets/LandingPage/Office_girl_1.svg"
import EmployeeChart from "./EmployeeChart";
import InterviewList from "./InterviewList";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro";
import dayjs from "dayjs";
import { styled } from "@mui/styles";
import { DateRangePickerDay as MuiDateRangePickerDay } from '@mui/x-date-pickers-pro/DateRangePickerDay';
import UpcomingList from "./UpcomingList";
import ActivityList from "./ActivityList";
import JobList from "./JobList";
import CandidateList from "./CandidateList";

const DateRangePickerDay = styled(MuiDateRangePickerDay)(
    ({
        theme,
        isHighlighting,
        isStartOfHighlighting,
        isEndOfHighlighting,
        outsideCurrentMonth,
    }) => ({
        ...(!outsideCurrentMonth &&
            isHighlighting && {
            borderRadius: 0,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            '&:hover, &:focus': {
                backgroundColor: theme.palette.primary.dark,
            },
        }),
        ...(isStartOfHighlighting && {
            borderTopLeftRadius: '50%',
            borderBottomLeftRadius: '50%',
        }),
        ...(isEndOfHighlighting && {
            borderTopRightRadius: '50%',
            borderBottomRightRadius: '50%',
        }),
    }),
);

export default function LandingPage(params) {
    const commonStyles = useCommonStyles();

    return <Box sx={{ mb: 2 }}>
        <Typography className={commonStyles.Title}>HR Employee</Typography>
        <Typography className={commonStyles.subTitle}>Enjoy your selecting potential candidates Tracking and Management System.</Typography>

        <Grid container spacing={2} mt={1}>
            <Grid item sm={7} xs={12}>
                <Box sx={{ backgroundColor: '#FFFFFF', boxShadow: '4px 4px 25px 0px #00000026', borderRadius: '10px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #D6D6D6' }}>
                        <Box sx={{
                            display: 'flex',
                            gap: '50px'
                        }}>
                            < Typography className={commonStyles.BoxTitle} > Application’s  Info</Typography>

                            <span style={{ display: 'inline-flex', gap: '10px' }}>
                                <>
                                    <Box sx={{ height: '20px', width: '20px', backgroundColor: '#277ACC', borderRadius: '3px' }}></Box>
                                    <Typography className={commonStyles.minFont}>Received</Typography>
                                </>

                                <>
                                    <Box sx={{ height: '20px', width: '20px', backgroundColor: '#002B55BD', borderRadius: '3px' }}></Box>
                                    <Typography className={commonStyles.minFont}>Processed</Typography>
                                </>
                            </span>
                        </Box>

                        <Box>
                            <Select value={"month"}
                                IconComponent={DownArrowIcon}
                                sx={{
                                    "& .MuiSelect-icon": {
                                        top: 'calc(50% - .2em)'
                                    },
                                    "& .MuiSelect-select.MuiSelect-outlined": {
                                        padding: '9.5px 14px',
                                        border: '1px solid #0A66C2'
                                    }
                                }}
                            >
                                <MenuItem value={"month"}>Month</MenuItem>
                            </Select>
                        </Box>
                    </Box>

                    <EmployeeChart />
                </Box>
            </Grid >
            <Grid item sm={5} xs={12}>
                <Box sx={{
                    background: "linear-gradient(74deg, #0A66C2 6.27%, #5994CE 90.96%)",
                    boxShadow: "4px 4px 25px 0px #00000026",
                    height: '360px',
                    padding: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderRadius: '10px'
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                        <Box sx={{ height: '125px', width: '125px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', padding: '15px' }}>
                            <FileIcon />
                        </Box>

                        <Typography mt={5} sx={{ fontSize: '55px', fontWeight: 600, color: '#FFFFFF' }}>0033</Typography>
                        <Typography mt={2} sx={{ fontSize: '22px', fontWeight: 600, color: '#FFFFFF' }}>New Assessment's</Typography>
                    </Box>
                    <Box sx={{ width: '60%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                        <Box sx={{ position: 'relative' }}>
                            <Office_girl_2 className={"OfficeGirlTwo"} />
                            <Office_girl_1 className={"OfficeGirlOne"} style={{ position: 'absolute', transform: 'translateY(-35%)' }} />
                        </Box>

                        <Box sx={{ alignSelf: 'end' }}>
                            <Button variant="contained" sx={{ backgroundColor: '#FFFFFF', color: '#000000', fontSize: '14px' }}>VIEW DETAILS</Button>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid >

        <Grid container spacing={2} >
            <Grid item sm={9} mt={2}>
                <InterviewList />

                <Box mt={2}>
                    <JobList />
                </Box>

                <Box mt={2} mb={2}>
                    <CandidateList />
                </Box>
            </Grid>
            <Grid item sm={3} mt={2}>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', px: '10px' }}>
                    <DateRangeCalendar calendars={1}
                        sx={{
                            backgroundColor: '#FFFFFF',
                            boxShadow: "4px 4px 25px 0px #00000026",
                            borderRadius: '3px',
                            // width: { xl: '300px', md: '100%', xs: '100%', sm: '100%' }
                            "&.MuiDateRangeCalendar-root": {
                                width: '100%'
                            },
                            "& .MuiDateRangeCalendar-monthContainer": {
                                width: '100%'
                            }
                        }}
                        defaultValue={[dayjs('2024-07-17'), dayjs('2024-07-30')]}
                        slots={{ day: MuiDateRangePickerDay }}
                    />

                    <Box width={"100%"} mt={2}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography className={commonStyles.BoxTitle}>Upcomings</Typography>
                            <Typography sx={{ color: '#0A66C2', textDecoration: 'underline' }} >View All</Typography>
                        </Box>

                        <Box mt={2}>
                            <UpcomingList />
                        </Box>

                        <Box mt={3}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography className={commonStyles.BoxTitle}>Activity</Typography>
                                <Typography sx={{ color: '#0A66C2', textDecoration: 'underline' }} >View All</Typography>
                            </Box>

                            <Box mt={2}>
                                <ActivityList />
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Grid>
        </Grid>

    </Box>
}