import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { styled } from "@material-ui/core/styles";
import { compose } from "recompose";
import classNames from "classnames";

import { withStyles } from "@material-ui/core/styles";
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import { NavLink, withRouter } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "fa5-pro-solids/faChevronRight";
import { faChevronUp } from "fa5-pro-solids/faChevronUp";
import { faChevronDown } from "fa5-pro-solids/faChevronDown";

const drawerWidth = 270;
const styles = theme => ({
    root: {
        flexGrow: 1,
        height: "100%",
        zIndex: 3,
        overflow: "visible",
        position: "absolute",
        display: "flex"
    },
    activeStyle: {
        background: "rgba(0,0,0,.12)",
        boxShadow: "inset 5px 0 0 -1px #2196F3",
        transition: "background .3s ease-in-out"
    },
    nestedStyle: {
        background: "rgba(0,0,0,.12)",
        transition: "background .3s ease-in-out"
    },
    drawer: {
        display: "grid",
        MsGridRows: "56px auto 1fr 56px",
        gridTemplateRows: "56px auto 1fr 56px",
        gridTemplateAreas: `'Logo' 'Links' '.' 'Trigger'`,
        "@media (maxWidth: 600px)": {
            width: props => (props.open ? "240px" : "0"),
            overflow: props => (props.open ? "visible" : "hidden")
        }
    },
    desktopDrawer: {
        display: "grid",
        MsGridRows: "56px auto 1fr 56px",
        gridTemplateRows: "56px auto 1fr 56px",
        gridTemplateAreas: `'Logo' 'Links' '.' 'Trigger'`,
        backgroundColor: "red"
    },
    drawerPaper: {
        whiteSpace: "nowrap",
        background: theme.palette.background.sidenav,
        boxShadow: "4px 0 8px rgba(0,0,0,.24)",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        }),
        overflow: "hidden"
    },

})

class SideNav extends PureComponent{
    
}
export default withRouter(
    compose(withStyles(styles, { withTheme: true }), withWidth())(SideNav)
);