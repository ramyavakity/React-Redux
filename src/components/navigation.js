import appLogo from './../logo.svg';
import { faHome } from "@fortawesome/free-solid-svg-icons";

const handleNavClick = e => {
    e.preventDefault()
}

const navigation = {
    appLogoLink: {
        appLogo: appLogo,
        label: "Ramya",
        to: "/"
    },
    userNavLinks: [
        { label: 'Settings', to: "/settings", onClickHandler: handleNavClick },
        { label: 'Feedback', to: "/feedback" },
        { label: 'Insights', to: "/insights" }
    ],
    sideNavLinks: [{ type: "exact", icon: faHome, label: "Home", to: "/home" }]
};
export default navigation;