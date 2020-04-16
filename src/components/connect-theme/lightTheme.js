const amber = require("./cncPalette/amber");
const blue = require("./cncPalette/blue");
const blueGrey = require("./cncPalette/blueGrey");
const cyan = require("./cncPalette/cyan");
const deepOrange = require("./cncPalette/deepOrange");
const deepPurple = require("./cncPalette/deepPurple");
const green = require("./cncPalette/green");
const grey = require("./cncPalette/grey");
const indigo = require("./cncPalette/indigo");
const orange = require("./cncPalette/orange");
const pink = require("./cncPalette/pink");
const purple = require("./cncPalette/purple");
const red = require("./cncPalette/red");
const teal = require("./cncPalette/teal");
const yellow = require("./cncPalette/yellow");

module.exports = {
    themeName: "light",
    palette: {
        primary: blue,
        secondary: green,
        error: red,
        warning: orange,
        default: grey,
        amber: amber,
        blueGrey: blueGrey,
        cyan: cyan,
        deepOrange: deepOrange,
        deepPurple: deepPurple,
        indigo: indigo,
        pink: pink,
        purple: purple,
        teal: teal,
        yellow: yellow,
        contrastThreshold: 2,
        contrastText: "#fff",
        tonalOffset: 0.2,
        text: {
            primary: indigo[500],
            secondary: blueGrey[500],
            disabled: blueGrey[200],
            hint: "rgba(0,0,0,0.38)",
            divider: "rgba(0,0,0,0.12)",
            alt1: "#fff",
            alt2: grey[200],
            header: blue[700]
        },
        node: {
            indigo: indigo[500],
            purple: deepPurple[500],
            green: green[600],
            teal: teal[500],
            blue: blueGrey[500],
            red: red[400],
            pink: pink[600],
            orange: orange[800]
        },
        action: {
            active: "rgba(0,0,0,0.54)",
            hover: "rgba(0,0,0,0.08)",
            hoverOpacity: 0.08,
            selected: "rgba(0,0,0,0.14)",
            disabled: "rgba(0,0,0,0.26)",
            disabledBackground: "rgba(0,0,0,0.12)"
        },
        background: {
            paper: "#fff",
            header: "#fff",
            subnav: "#fff",
            sidenav: blueGrey[600],
            snackbar: 'rgba(0,0,0,0.87)',
            content: "#00000010",
            hover: grey[300],
            active: blueGrey[100],
            bg: blueGrey[50],
            border: grey[50],
            scroll: blueGrey[100],
            accent: blue[800],
            accent2: "#fff",
            default: grey[50],
            inverse: blueGrey[700]
        }
    },
    props: {
        MuiTypography: {
            variantMapping: {
                h1: 'h4',
                h2: 'h5',
                h3: 'h5',
                h4: 'h5',
                h5: 'h5',
                h6: 'h5',
                subtitle1: 'div',
                subtitle2: 'div',
                body1: 'div',
                body2: 'div'
            },
        },
    },
    typography: {
        fontFamily: "Lato, Helvetica, Arial, sans-serif",
        fontSize: 16,
        fontWeight: 400,
        htmlFontSize: 16,
        h1: {
            fontSize: "6rem",
            fontWeight: 300,
            fontFamily: "Lato, Helvetica, Arial, sans-serif",
            color: blueGrey[700]
        },
        h2: {
            fontSize: "3.75rem",
            fontWeight: 300,
            fontFamily: "Lato, Helvetica, Arial, sans-serif",
            color: blueGrey[700]
        },
        h3: {
            fontSize: "3rem",
            fontWeight: 400,
            fontFamily: "Lato, Helvetica, Arial, sans-serif",
            color: blueGrey[700]
        },
        h4: {
            fontSize: "2.125rem",
            fontWeight: 400,
            fontFamily: "Lato, Helvetica, Arial, sans-serif",
            color: blueGrey[700]
        },
        h5: {
            fontSize: "1.5rem",
            fontWeight: 400,
            fontFamily: "Lato, Helvetica, Arial, sans-serif",
            color: blueGrey[700]
        },
        h6: {
            fontSize: "1.25rem",
            fontWeight: 700,
            fontFamily: "Lato, Helvetica, Arial, sans-serif",
            color: blueGrey[700]
        },

        subtitle2: {
            fontSize: "1rem",
            fontWeight: 400,
            fontFamily: "Lato, Helvetica, Arial, sans-serif",
            color: blueGrey[700],
            letterSpacing: 0
        },
        subtitle1: {
            fontSize: "1rem",
            fontWeight: 400,
            fontFamily: "Lato, Helvetica, Arial, sans-serif",
            color: blueGrey[700],
            letterSpacing: 0
        },

        body2: {
            fontSize: "0.9375rem",
            fontWeight: 400,
            fontFamily: "Lato, Helvetica, Arial, sans-serif",
            color: blueGrey[700],
            letterSpacing: 0
        },
        body1: {
            fontSize: "0.9375rem",
            fontWeight: 400,
            fontFamily: "Lato, Helvetica, Arial, sans-serif",
            color: blueGrey[700],
            letterSpacing: 0
        },

        button: {
            fontSize: "0.875rem",
            fontWeight: 400,
            fontFamily: "Lato, Helvetica, Arial, sans-serif",
            textTransform: "uppercase"
        },
        caption: {
            fontSize: "0.75rem",
            fontWeight: 400,
            fontFamily: "Lato, Helvetica, Arial, sans-serif",
            color: blueGrey[500],
            letterSpacing: 0.2
        },
        overline: {
            fontSize: "0.875rem",
            fontWeight: 400,
            fontFamily: "Lato, Helvetica, Arial, sans-serif",
            color: blueGrey[500],
            letterSpacing: 1,
            textTransform: "uppercase"
        },
    }
};
