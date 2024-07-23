import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#0052cc',
        },
        secondary: {
            main: '#edf2ff',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    '&.MuiButton-containedPrimary': {
                        // backgroundColor: '#1890FF',
                    },
                    "&.MuiButtonBase-root.MuiButton-root.Mui-disabled": {
                        color: "rgba(0, 0, 0, 0.26)",
                        boxShadow: "none",
                        backgroundColor: "rgba(0, 0, 0, 0.12)!important"
                    },
                    textTransform: "none"
                }
            }
        },
        MuiModal: {
            styleOverrides: {
                root: {
                    "& .MuiBackdrop-root": {
                        // backgroundColor: "transparent",
                    },
                  
                    "& .MuiContainer-root": {
                     
                    }


                }
            }
        }
    }
});

theme = responsiveFontSizes(theme);

export default theme;
