import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, StylesProvider, createMuiTheme } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from '../../connect-theme/index';
import CssBaseline from '@material-ui/core/CssBaseline';

const CncThemeProvider = ({ childern, themeName, generateClassName }) => {
    console.log('cnc',themeName);
    const theme = createMuiTheme(themeName === 'dark' ? darkTheme : lightTheme)
    return (
        <StylesProvider injectFirst generateClassName={generateClassName}>
            <ThemeProvider theme={theme}>
                <CssBaseline>{childern}</CssBaseline>
            </ThemeProvider>
        </StylesProvider>
    )
}

CncThemeProvider.propTypes = {
    childern: PropTypes.any,
    themeName: PropTypes.string,
    generateClassName: PropTypes.func
}

//ships with light theme for default 
CncThemeProvider.defaultProps = {
    theme: lightTheme
}

export default CncThemeProvider;