import { createTheme } from "@mui/material";
import { globalColors } from "./globalColors";

export const theme = createTheme({
    palette:{
        primary: {
            main: globalColors.myColorBlue['50'],
            light: '#ffa07a',
            dark: '#cd5c5c',
            contrastText: '#fff'
        },
        secondary: {
            main: '#f08080',
            light: '#ffa07a',
            dark: '#cd5c5c',
            contrastText: '#fff'
        }
    },
    components:{
    }
})