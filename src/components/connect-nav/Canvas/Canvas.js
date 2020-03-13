import React from "react";
import PropTypes from "prop-types";
import { styled, withStyles } from "@material-ui/core/styles";
import navigation from "../../navigation";
import { settings } from "../../../static/data";
import SideNav from "../SideNav/SideNav";

const Desktop = styled("div")(props => {
    return {
        position: "fixed",
        width: "100%",
        height: "100vh",
        overflowX: "hidden",
        paddingLeft: props.open ? 270 : 64,
        transition: props.open
            ? props.theme.transitions.create("padding", {
                easing: props.theme.transitions.easing.sharp,
                duration: props.theme.transitions.duration.enteringScreen
            })
            : props.theme.transitions.create("padding", {
                easing: props.theme.transitions.easing.sharp,
                duration: props.theme.transitions.duration.enteringScreen
            }),
        overflow: "hidden"
    };
});

class Canvas extends React.Component {
    state = {
        drawerOpen: 0
    };
    controlDrawer = open => {
        this.setState({
            drawerOpen: open
        });
    };

    render() {
        return (
            <div>
                <Desktop open={this.state.drawerOpen}>
                    {this.props.children}
                    <SideNav
                        clicked={open => {
                            this.controlDrawer(open);
                        }}
                        desktop
                        navigation={navigation}
                        settings={settings}
                    />
                </Desktop>
            </div>
        );
    }
}

Canvas.PropTypes = {
    children: PropTypes.any,
    nopadding: PropTypes.bool,
    desktop: PropTypes.bool
}

export default Canvas;