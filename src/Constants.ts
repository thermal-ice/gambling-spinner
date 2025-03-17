import {createTheme} from "@mui/material";

export const BACKGROUND_COLOURS =
    ['#87CEEB',
    '#FFD700',
    '#FF6347',
    '#ADD8E6',
    '#FFFFE0',
    '#98FB98',
    '#E6E6FA',
    '#FFDAB9',
    '#F08080',
    '#F5FFFA'
    ]

export const BALANCED_DARK_THEME = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#6C63FF" }, // Soft purple
        secondary: { main: "#FFAD60" }, // Warm orange
        background: { default: "#2C2F33", paper: "#3B3F45" }, // Dark gray but not black
        text: { primary: "#E0E0E0", secondary: "#B0B3B8" }, // Soft white and gray text
    },
});


