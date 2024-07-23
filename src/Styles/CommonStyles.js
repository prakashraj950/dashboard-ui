import { makeStyles } from '@mui/styles';


const useCommonStyles = makeStyles(theme => ({
    headerInput: {
        "&.MuiFormControl-root.MuiTextField-root": {
            backgroundColor: "#FFFFFF",
            boxShadow: "4px 4px 25px 0px #00000026",
        },
        "& fieldset": {
            display: 'none'
        },
        // "& .MuiInputBase-input.MuiOutlinedInput-input": {
        //     padding: "8.5px 10px",
        //     fontSize: '12px',
        // },
        // "& .MuiInputBase-root.MuiOutlinedInput-root": {
        //     backgroundColor: '#FFF'
        // },

    },
    Title: {
        "&.MuiTypography-root": {
            fontSize: '20px',
            fontWeight: 500,
            color: '#3E3E3E'
        }
    },
    BoxTitle: {
        "&.MuiTypography-root": {
            fontSize: '16px',
            fontWeight: 500,
            color: "#000000"
        }
    },
    minFont: {
        "&.MuiTypography-root": {
            fontSize: '14px',
            fontWeight: 400,
            color: '#000000'
        }
    },
    subTitle: {
        "&.MuiTypography-root": {
            fontSize: '14px',
            fontWeight: 400,
        }
    },
    OfficeGirlTwo: {
        [theme.breakpoints.down('xs')]: {
     
        },
        [theme.breakpoints.down('sm')]: {
            "&svg": {
                width: '100px'
            }
        },

    }


}))

export default useCommonStyles