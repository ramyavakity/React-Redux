import appLogo from './../logo.svg';
import HomeIcon from '@material-ui/icons/Home';

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
        { label: 'Settings', to: "/settings", onClickHandler: handleNavClick }
    ],
    sideNavLinks: [{ type: "exact", icon: HomeIcon, label: "Home", to: "/home" }]
};
export default navigation;