import { Typography, Grid, Box, Select, MenuItem, Button } from "@mui/material";
import { Expand } from "@mui/icons-material"
import useCommonStyles from "../../Styles/CommonStyles";
import { ReactComponent as DownArrowIcon } from "../../assets/LandingPage/DownArrow.svg"
import { ReactComponent as FileIcon } from "../../assets/LandingPage/FileIcon.svg"
import { ReactComponent as Office_girl_2 } from "../../assets/LandingPage/Office_girl_2.svg"
import { ReactComponent as Office_girl_1 } from "../../assets/LandingPage/Office_girl_1.svg"
import EmployeeChart from "./EmployeeChart";



export default function LandingPage(params) {
    const commonStyles = useCommonStyles();

    return <>
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
    </>
}