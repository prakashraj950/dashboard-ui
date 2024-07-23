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
        fontSize: '20px',
        fontWeight: 500,        
    },
    BoxTitle: {
        fontSize: '18px',
        fontWeight: 500,        
    }


}))

export default useCommonStyles