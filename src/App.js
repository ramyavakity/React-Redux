import React, { Component } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { lightTheme, darkTheme } from './components/connect-theme/index';
import Routes from './Routes';
import Canvas from './components/connect-nav/Canvas/Canvas';
import CncThemeProvider from './components/connect-nav/CncThemeProvider/CncThemeProvider';
import './index.css';

const GlobalStyle = createGlobalStyle`
@import url(' https://fonts.googleapis.com/css?family=Lato:300,400,700 ');

html {
  font-family: 'Lato',helvetica,arial,sans-serif;
}
:root {
  font-size: 100%;
}
`
const AppWrapper = styled.div`
  height: 100vh;
  display: grid;
  -ms-grid-columns: 1fr;
  grid-template-columns: 1fr;
  -ms-grid-rows: 56px 1fr;
  grid-template-rows: 56px 1fr;
  grid-template-areas: 'TopNav TopNav' 'Canvas Canvas';
  overflow: hidden;
`

class App extends Component {
  render() {
    const { theme } = this.props;
    console.log('theme', theme);
    return (
      <div>
        <GlobalStyle />
        <CncThemeProvider themeName={!theme ? 'light' : 'dark'}>
          <ThemeProvider theme={theme ? lightTheme : darkTheme}>
            <BrowserRouter>
              <AppWrapper>
                <Canvas desktop>
                  <Routes />
                </Canvas>
                {/* */}
              </AppWrapper>
            </BrowserRouter>
          </ThemeProvider>
        </CncThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  theme: PropTypes.bool
}

const mapStateToProps = state => {
  console.log('state', state);
  return ({
    theme: state.settings.theme || false
  })
}

const mapDispatchToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
