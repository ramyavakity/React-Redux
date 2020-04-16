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

    renderSideNavLinks = (sideNavLinks = [], clickTracker) => {
        const { classes, navigation } = this.props;
        const { sidenavisopen, selectedIndex } = this.state;
        return sideNavLinks.map((link, index) => {
            if (link.type === "custom") {
                const CustomIcon = link.component;
                return (
                    <StyledListItem
                        button
                        key={index}
                        onClick={
                            sidenavisopen
                                ? () => {
                                    clickTracker && clickTracker(link.label);
                                    this.toggleNav(index);
                                }
                                : e => {
                                    clickTracker && clickTracker(link.label);
                                    this.highLightMenuItem(index);
                                    e.stopPropagation();
                                    this.props.clicked(this.state.sidenavisopen);
                                }
                        }
                        data-test={`customSideNavItem_${index}`}
                    >
                        <Tooltip
                            TransitionComponent={Zoom}
                            title={link.label}
                            placement="right"
                            PopperProps={{
                                disablePortal: sidenavisopen === 1
                            }}
                            data-test={`customSideNavItemTooltip_${index}`}
                        >
                            <StyledLink
                                to={link.to}
                                activeClassName={classes.activeStyle}
                                data-test={`customSideNavItemLink_${link.id}`}
                            >
                                <ListItemIconWrap>
                                    <CustomIcon />
                                </ListItemIconWrap>
                                {sidenavisopen === 1 && <StyledText>{link.label}</StyledText>}
                            </StyledLink>
                        </Tooltip>
                    </StyledListItem>
                );
            } else if (link.type === "mested") {
                return (
                    <div key={index}>
                        <StyledListItem
                            button
                            onClick={
                                sidenavisopen === 1
                                    ? this.handleCollapse(link.id, index)
                                    : this.handleMenu(link.id, index)
                            }
                            data-test={`nestedSideNavItem_${index}`}
                        >
                            <Tooltip
                                TransitionComponent={Zoom}
                                title={link.label}
                                placement="right"
                                PopperProps={{
                                    disablePortal: sidenavisopen === 1
                                }}
                                data-test={`nestedSideNavItemTooltip_${link.id}`}
                            >
                                <NestedLabel
                                    expand={selectedIndex === index ? "true" : undefined}
                                >
                                    <ListItemIconWrap>
                                        <StyledIcon icon={link.icon} />
                                    </ListItemIconWrap>
                                    {sidenavisopen === 1 && (
                                        <div>
                                            <StyledText>{link.label}</StyledText>
                                            <ListItemSecondaryAction>
                                                <Fade in={sidenavisopen === 1}>
                                                    <NestedIcon>
                                                        {this.sate[link.id] === 1 ? (
                                                            <FontAwesomeIcon
                                                                style={{ color: "white" }}
                                                                icon={faChevronUp}
                                                            />
                                                        ) : (
                                                                <FontAwesomeIcon
                                                                    style={{ color: "white" }}
                                                                    icon={faChevronDown}
                                                                />
                                                            )}
                                                    </NestedIcon>
                                                </Fade>
                                            </ListItemSecondaryAction>
                                        </div>
                                    )}
                                </NestedLabel>
                            </Tooltip>
                        </StyledListItem>

                        <Collapse
                            in={this.state[link.id] === 1}
                            timeout="auto"
                            unmountOnExit
                        >
                            <List component="div" className={classes.nestedStyle}>
                                {this.renderNestedList(
                                    navigation.sideNavLinks[index].nestedLinks,
                                    index
                                )}
                            </List>
                        </Collapse>
                    </div>
                );
            } else if (link.type === "exact") {
                return (
                    <StyledListItem
                        button
                        key={index}
                        onClick={
                            sidenavisopen
                                ? () => {
                                    clickTracker && clickTracker(link.label);
                                    this.toggleNav(index);
                                }
                                : e => {
                                    clickTracker && clickTracker(link.label);
                                    this.highLightMenuItem(index);
                                    e.stopPropagation();
                                }
                        }
                        data-test={`exactSideNavItem_${index}`}
                    >
                        <Tooltip
                            TransitionComponent={Zoom}
                            title={link.label}
                            placement="right"
                            PopperProps={{
                                disablePortal: sidenavisopen === 1
                            }}
                            data-test={`exactSideNavItemTooltip_${index}`}
                        >
                            <StyledLink
                                exact
                                activeClassName={classes.activeStyle}
                                to={link.to}
                                data-test={`exactSideNavItemLink_${index}`}
                            >
                                <ListItemIconWrap>
                                    <StyledIcon icon={link.icon} />
                                </ListItemIconWrap>
                                {sidenavisopen === 1 && <StyledText>{link.label}</StyledText>}
                            </StyledLink>
                        </Tooltip>
                    </StyledListItem>
                );
            } else if (link.type === "customLink") {
                return (
                    <StyledListItem
                        button
                        disableGutters
                        key={index}
                        onClick={
                            sidenavisopen
                                ? () => {
                                    clickTracker && clickTracker(link.label);
                                    this.toggleNav(index);
                                }
                                : e => {
                                    clickTracker && clickTracker(link.label);
                                    this.highLightMenuItem(index);
                                    e.stopPropagation();
                                }
                        }
                        data-test={`sideNavItem_${index}`}
                    >
                        <Tooltip
                            TransitionComponent={Zoom}
                            title={link.label}
                            placement="right"
                            PopperProps={{
                                disablePortal: sidenavisopen === 1
                            }}
                            data-test={`sideNavItemTooltip_${index}`}
                        >
                            <StyledCustomLink
                                href={link.to}
                                activeClassName={classes.activeStyle}
                                data-test={`sideNavItemLink_${index}`}
                            >
                                <ListItemIconWrap>
                                    <StyledIcon icon={link.icon} />
                                </ListItemIconWrap>
                                {sidenavisopen === 1 && <StyledText>{link.label}</StyledText>}
                            </StyledCustomLink>
                        </Tooltip>
                    </StyledListItem>
                );
            } else {
                return (
                    <StyledListItem
                        button
                        key={index}
                        onClick={
                            sidenavisopen
                                ? () => {
                                    clickTracker && clickTracker(link.label);
                                    this.toggleNav(index);
                                }
                                : e => {
                                    clickTracker && clickTracker(link.label);
                                    this.highLightMenuItem(index);
                                    e.stopPropagation();
                                }
                        }
                        data-test={`sideNavItem_${index}`}
                    >
                        <Tooltip
                            TransitionComponent={Zoom}
                            title={link.label}
                            placement="right"
                            PopperProps={{
                                disablePortal: sidenavisopen === 1
                            }}
                            data-test={`sideNavItemTooltip_${index}`}
                        >
                            <StyledLink
                                to={link.to}
                                activeClassName={classes.activeStyle}
                                data-test={`sideNavItemLink_${index}`}
                            >
                                <ListItemIconWrap>
                                    <StyledIcon icon={link.icon} />
                                </ListItemIconWrap>
                                {sidenavisopen === 1 && <StyledText>{link.label}</StyledText>}
                            </StyledLink>
                        </Tooltip>
                    </StyledListItem>
                );
            }
        });
    };

    render() {
        const { classes, navigation = {}, clickTracker, desktop } = this.props;
        const { sidenavisopen } = this.state;
        const { sideNavLinks = [], appLogoLink = {} } = navigation;
        if (desktop) {
            return (
                <div>
                    {/* Desktop Drawer */}
                    <div className={classes.root}>
                        <Drawer
                            className={classes.desktopDrawer}
                            onClick={() => this.toggleNav()}
                            variant={"permanent"}
                            classes={{
                                paper: classNames(
                                    classes.drawerPaper,
                                    !sidenavisopen && classes.desktopDrawerPaperClose
                                )
                            }}
                            open={sidenavisopen === 1}
                        >
                            {/* Brandbox */}

                            <StyledListItem
                                button
                                style={{ gridArea: "Logo" }}
                                aria-label="connect-logo"
                                onClick={
                                    sidenavisopen
                                        ? () => {
                                            this.toggleNav();
                                        }
                                        : e => {
                                            e.stopPropagation();
                                        }
                                }
                            >
                                {this.renderAppLogoLink(appLogoLink, clickTracker)}
                            </StyledListItem>

                            <List disablePadding component="nav">
                                {this.renderSideNavLinks(sideNavLinks, clickTracker)}
                            </List>

                            {/* Trigger */}
                            <ExpandIcon
                                aria-label="expand-menu"
                                sidenavisopen={sidenavisopen}
                            >
                                <TriggerCircle style={{ width: 40, height: 40 }}>
                                    <TriggerCircle>
                                        <StyledIcon
                                            sidenavisopen={sidenavisopen}
                                            icon={faChevronRight}
                                            style={{ fontSize: 12 }}
                                        />
                                    </TriggerCircle>
                                </TriggerCircle>
                            </ExpandIcon>
                        </Drawer>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    {/* Desktop Drawer */}

                    <Hidden xsDown>
                        <div className={classes.root}>
                            <Drawer
                                className={classes.drawer}
                                onClick={() => this.toggleNav()}
                                variant={"permanent"}
                                classes={{
                                    paper: classNames(
                                        classes.drawerPaper,
                                        !sidenavisopen && classes.desktopDrawerPaperClose
                                    )
                                }}
                                opne={sidenavisopen === 1}
                            >
                                {/*Brandbox */}

                                <Hidden xsDown>
                                    <StyledListItem
                                        button
                                        style={{ gridArea: "Logo" }}
                                        aria-label="connect-logo"
                                        onClick={
                                            sidenavisopen
                                                ? () => {
                                                    this.toggleNav();
                                                }
                                                : e => {
                                                    e.stopPropagation();
                                                }
                                        }
                                    >
                                        {this.renderAppLogoLink(appLogoLink, clickTracker)}
                                    </StyledListItem>
                                </Hidden>

                                <List disablePadding component="nav">
                                    {this.renderSideNavLinks(sideNavLinks, clickTracker)}
                                </List>

                                {/*Trigger */}
                                <Hidden xsDown>
                                    <ExpandIcon
                                        aria-label="expand-menu"
                                        sidenavisopen={sidenavisopen}
                                    >
                                        <TriggerCircle style={{ width: 40, height: 40 }}>
                                            <TriggerCircle>
                                                <StyledIcon
                                                    sidenavisopen={sidenavisopen}
                                                    icon={faChevronRight}
                                                    style={{ fontSize: 12 }}
                                                />
                                            </TriggerCircle>
                                        </TriggerCircle>
                                    </ExpandIcon>
                                </Hidden>
                            </Drawer>
                        </div>
                    </Hidden>
                </div>
            );
        }
    }
}

SideNav.propTypes = {
    classes: PropTypes.object.isRequired,
    navigation: PropTypes.object,
    in: PropTypes.bool,
    clickTracker: PropTypes.func,
    selectedIndex: PropTypes.number,
    desktop: PropTypes.bool
};

export default withRouter(
    compose(withStyles(styles, { withTheme: true }), withWidth())(SideNav)
);