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


module.exports={
    themeName:"light",
    palette:{
        primary:blue,
        secondary:green,
        error:red,
        warning:orange,
        default:grey,
        amber:amber,
        blueGrey:blueGrey,
        cyan:cyan,
        deepOrange:deepOrange,
        deepPurple:deepPurple,
        indigo:indigo,
        pink:pink,
        purple:purple,
        teal:teal,
        yellow:yellow,
        contrastThreshold:2,
        contrastText:"#fff",
        tonalOffset:0.2,
        text:{
            primary:indigo[500],
            secondary:blueGrey[500],
            disabled:blueGrey[200],
            hint:"rgba(0,0,0,0.38)",
            divider:"rgba(0,0,0,0.12)",
            alt1:"#fff",
            alt2:grey[200],
            header:blue[700]
        },
        node:{
            indigo:indigo[500],
            purple:deepPurple[500],
            green:green[600],
            teal:teal[500],
            blue:blueGrey[500],
            red:red[400],
            pink:pink[600],
            orange:orange[800]
        },
        action:{
            
        }
    }
}