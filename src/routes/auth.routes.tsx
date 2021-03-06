import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../Pages/Login';

const AuthRoutes: React.FC = () => {
    return(
        <Switch>
            <Route path="/" component={ Login } />
        </Switch>
    );
}

export default AuthRoutes;