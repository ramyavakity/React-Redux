const amber = require("./cncPalette/amber.js");
const blue = require("./cncPalette/blue.js");
const blueGrey = require("./cncPalette/blueGrey.js");
const cyan = require("./cncPalette/cyan.js");
const deepOrange = require("./cncPalette/deepOrange.js");
const deepPurple = require("./cncPalette/deepPurple.js");
const green = require("./cncPalette/green.js");
const grey = require("./cncPalette/grey.js");
const indigo = require("./cncPalette/indigo.js");
const orange = require("./cncPalette/orange.js");
const pink = require("./cncPalette/pink.js");
const purple = require("./cncPalette/purple.js");
const red = require("./cncPalette/red.js");
const teal = require("./cncPalette/teal.js");
const yellow = require("./cncPalette/yellow.js");

module.exports = {
    themeName: "dark",
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
        contrastText: '#fff',
        tonalOffset: 0.2,
        text: {
            primary: "#fff",
            secondary: blueGrey[200],
            disabled: blueGrey[50],
            hint: "rgba(255,255,255,0.38)",
            divider: "rgba(255,255,255,0.12)",
            alt1: "#fff",
            alt2: blueGrey[200],
            header: "#fff"
        },
        node: {
            indigo: indigo[500],
            purple: deepPurple[500],
            green: green[600],
            teal: teal[500],
            blue: blue[500],
            red: red[400],
            pink: pink[600],
            orange: orange[800]
        },
        action: {
            active: "rgba(255,255,255,0.54)",
            hover: "rgba(255,255,255,0.08)",
            hoverOpacity: 0.88,
            selected: "rgba(255,255,255,0.14)",
            disabled: "rgba(255,255,255,0.26)",
            disbaledBackground: "rgba(255,255,255,0.12)"
        },
        background: {
            paper: blue[800],
            header: blueGrey[800],
            subnav: blueGrey[800],
            sidenav: blueGrey[600],
            snackbar: '#fff',
            content: "#ffffff10",
            hover: blueGrey[800],
            active: blueGrey[400],
            bg: "#00000050",
            border: blueGrey[600],
            scroll: blueGrey[500],
            accent: blueGrey[500],
            accent2: blueGrey[600],
            default: blueGrey[900],
            inverse: "white"
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
        fontFamily: "Lato , Helvetica, Arial, sans-serif",
        fontSize: 16,
        fontWeight: 400,
        htmlFontSize: 16,
        h1: {
            fontSize: "6rem",
            fontWeight: 300,
            fontFamily: "Lato , Helvetica, Arial, sans-serif",
            color: "#fff"
        },
        h2: {
            fontSize: "3.75rem",
            fontWeight: 300,
            fontFamily: "Lato , Helvetica, Arial, sans-serif",
            color: "#fff"
        },
        h3: {
            fontSize: "3rem",
            fontWeight: 400,
            fontFamily: "Lato , Helvetica, Arial, sans-serif",
            color: "#fff"
        },
        h4: {
            fontSize: "2.125rem",
            fontWeight: 400,
            fontFamily: "Lato , Helvetica, Arial, sans-serif",
            color: "#fff"
        },
        h5: {
            fontSize: "1.5rem",
            fontWeight: 400,
            fontFamily: "Lato , Helvetica, Arial, sans-serif",
            color: "#fff"
        },
        h6: {
            fontSize: "1rem",
            fontWeight: 400,
            fontFamily: "Lato , Helvetica, Arial, sans-serif",
            color: "#fff"
        },
        subtitle1: {
            fontSize: "1rem",
            fontWeight: 400,
            fontFamily: "Lato , Helvetica, Arial, sans-serif",
            color: "#fff",
            letterSpacing: 0
        },
        subtitle2: {
            fontSize: "1rem",
            fontWeight: 400,
            fontFamily: "Lato , Helvetica, Arial, sans-serif",
            color: "#fff",
            letterSpacing: 0
        },
        body1: {
            fontSize: "0.9375rem",
            fontWeight: 400,
            fontFamily: "Lato , Helvetica, Arial, sans-serif",
            color: "#fff",
            letterSpacing: 0
        },
        body2: {
            fontSize: "0.9375rem",
            fontWeight: 400,
            fontFamily: "Lato , Helvetica, Arial, sans-serif",
            color: "#fff",
            letterSpacing: 0
        },
        button: {
            fontSize: "0.875rem",
            fontWeight: 400,
            fontFamily: "Lato , Helvetica, Arial, sans-serif",
            textTransform: "uppercase"
        },
        caption: {
            fontSize: "0.75rem",
            fontWeight: 400,
            fontFamily: "Lato , Helvetica, Arial, sans-serif",
            color: "#fff",
            letterSpacing: 0.2
        },
        overline: {
            fontSize: "0.875rem",
            fontWeight: 400,
            fontFamily: "Lato , Helvetica, Arial, sans-serif",
            color: "#fff",
            textTransform: "uppercase"
        }
    }
};