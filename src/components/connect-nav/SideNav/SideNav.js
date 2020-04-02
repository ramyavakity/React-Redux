import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { styled } from "@material-ui/core/styles";
import { compose } from "recompose";
import classNames from "classnames";

import { withStyles } from "@material-ui/core/styles";
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Drawer from '@material-ui/core/Drawer';
import Collapse from '@material-ui/core/Collapse'
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
    drawerPaperClose: {
        boxShadow: theme.shadows[0],
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        width: drawerWidth,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(8)
        },
        overflow: "hidden"
    },
    desktopDrawerPaperClose: {
        boxShadow: theme.shadows[0],
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(8),
        overflow: "hidden"
    }
});

const NavLinkWithForwardedRef = React.forwardRef((props, ref) => (
    <NavLink innerRef={ref}{...props} />
));

NavLinkWithForwardedRef.displayName = "CustomNavLink";

const StyledLink = styled(NavLinkWithForwardedRef)({
    display: "grid",
    alignItems: "center",
    MsGridColumns: "64px auto",
    gridTemplateColumns: "64px auto",
    width: "100%",
    height: 50,
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    fontSize: 12,
    color: "#ffffff",
    fontWeight: 400,
    textDecoration: "none"
});
const StyledCustomLink = styled("a")({
    display: "grid",
    alignItems: "center",
    MsGridColumns: "64px auto",
    gridTemplateColumns: "64px auto",
    width: "100%",
    height: 50,
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    fontSize: 12,
    color: "#ffffff",
    fontWeight: 400,
    textDecoration: "none"
});

const NestedLabel = styled("div")({
    display: "grid",
    alignItems: "center",
    MsGridColumns: "64px auto",
    gridTemplateColumns: "64px auto",
    width: "100%",
    height: 50,
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    fontSize: 12,
    color: "#ffffff",
    fontWeight: 400,
    textDecoration: "none",
    background: props => (props.expand ? "rgba(0,0,0,.12)" : ""),
    boxShadow: props => (props.expand ? "inset 5px 0 0 0 -1px #2196F3" : ""),
    transition: props => (props.expand ? "background .3s ease-in-out" : "")
});

const NestedLink = styled(NavLink)({
    display: "grid",
    alignItems: "center",
    MsGridColumns: "64px auto",
    gridTemplateColumns: "64px auto",
    width: "100%",
    height: 50,
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    fontSize: 12,
    color: "#ffffff",
    fontWeight: 400,
    textDecoration: "none"
});

const StyledListItem = styled(ListItem)({
    padding: 0
});

const NestedListItem = styled(ListItem)({
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 64
});

const ExpandIcon = styled(Button)({
    display: "grid",
    gridArea: "Trigger",
    height: 60,
    marginTop: "auto",
    justifyContent: "right"
});

const TriggerCircle = styled("div")({
    width: 30,
    height: 30,
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255, 255,255,0.1)",
    borderRadius: "50%"
});

const StyledIcon = styled(FontAwesomeIcon)({
    color: "#ffffff",
    fontSize: "1.5em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    transition: props => (props.sidenavisopen ? "all 360ms linear" : ""),
    transform: props => (props.sidenavisopen ? "rotate(180deg)" : "")
});

const StyledText = styled("div")({
    color: "#fff"
});

const LogoText = styled("div")({
    color: "#fff",
    textTransform: "none",
    fontSize: "1.6em",
    letterSpacing: 0
});

const Logo = styled("img")({
    height: 56,
    display: "block",
    width: "100%",
    padding: 16,
    margin: "auto"
});

const ListItemIconWrap = styled(ListItemIcon)({
    display: "block",
    margin: "auto",
    textAlign: "center"
});

const NestedIcon = styled(ListItemIcon)({
    minWidth: 16
});

class SideNav extends PureComponent {
    constructor(props) {
        super(props);
        const expandItems = this.setInitialExpandMenu();

        this.state = {
            sidenavisopen: 0,
            ...expandItems,
            selectedIndex: props.selectedIndex || 0
        };
    }

    setInitialExpandMenu = () => {
        const {
            navigation: { sideNavLinks = [] }
        } = this.props;
        let expandItems;
        sideNavLinks.map(link => {
            if (link.type === "nested" && link.nestedLinks.length > 0) {
                expandItems = {
                    ...expandItems,
                    [link.id]: 0
                };
            }
        });
        return expandItems;
    };

    toggleNav = async index => {
        const expandItems = this.setInitialExpandMenu();
        const selectedIndex = index ? { selectedIndex: index } : {};
        await this.setState({
            sidenavisopen: this.state.sidenavisopen === 1 ? 0 : 1,
            ...expandItems,
            ...selectedIndex
        });
        await this.props.clicked(this.state.sidenavisopen);
    };

    highLightMenuItem = async index => {
        const expandItems = this.setInitialExpandMenu();
        await this.setState({
            ...expandItems,
            selectedIndex: index
        });
        // await this.props.clicked(!this.state.sidenavisopen);
    };

    handleMenu = (name, index) => async event => {
        event.stopPropagation();
        await this.setState({
            [name]: this.state[name] === 0 ? 1 : 0,
            sidenavisopen: this.state.sidenavisopen === 1 ? 0 : 1,
            selectedIndex: index
        });
        await this.props.clicked(this.state.sidenavisopen);
    };

    handleCollapse = (name, index) => async event => {
        event.stopPropagation();
        await this.setState({
            [name]: this.state[name] === 0 ? 1 : 0,
            selectedIndex: index
        });
        await this.props.clicked(this.state.sidenavisopen);
    };

    renderAppLogoLink = (appLogoLink = {}, clickTracker) => {
        const { to, appLogo, label, label2 } = appLogoLink;
        const { sidenavisopen } = this.state;
        return (
            <StyledLink
                exact
                to={to}
                style={{ height: 56 }}
                onClick={() => clickTracker && clickTracker(label)}
            >
                <ListItemIconWrap>
                    <Logo alt="connect-logo" src={appLogo} />
                </ListItemIconWrap>
                {sidenavisopen === 1 && (
                    <LogoText>
                        {label}
                        <span style={{ fontWeight: 300 }}>{label2}</span>
                    </LogoText>
                )}
            </StyledLink>
        );
    };

    renderNestedList = (nestedLinks = [], index) => {
        return nestedLinks.map(link => {
            return (
                <NestedListItem
                    button
                    key={link.label}
                    onClick={() => this.toggleNav(index)}
                    style={{ height: 36 }}
                >
                    <NestedLink
                        to={link.to}
                        activeStyle={{
                            color: "#2196F3",
                            transition: "all .3s ease-in-out",
                            textShadow: "0 0 14px rgba(33,150,243,0.5)"
                        }}
                    >
                        {link.label}
                    </NestedLink>
                </NestedListItem>
            );
        });
    };

}
export default withRouter(
    compose(withStyles(styles, { withTheme: true }), withWidth())(SideNav)
);