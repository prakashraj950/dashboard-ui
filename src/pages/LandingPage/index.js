import { Typography } from "@mui/material";
import useCommonStyles from "../../Styles/CommonStyles";

export default function LandingPage(params) {
    const commonStyles = useCommonStyles();

    return <>     
        <Typography className={commonStyles.Title}>HR Employee</Typography>
    </>
}