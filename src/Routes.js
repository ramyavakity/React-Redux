import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Settings from './components/connect-nav/Settings/Settings';

const Main = () => {
    return (
        <h1 style={{ textAlign: 'center', color: 'darkcyan' }}>Welcome to my React Application</h1>
    )
}

const Home = () => {
    return (
        <h1 style={{ textAlign: 'center', color: 'darkcyan' }}>Home Page!!!!</h1>
    )
}

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/settings' component={Settings} />
        </Switch>
    );
};

export default Routes;