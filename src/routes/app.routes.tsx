import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Dashboard from '../Pages/Dashboard';
import Lists from '../Pages/Lists';

const AppRoutes: React.FC = () => {
    return(

        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/dashboard" exact component={ Dashboard } />
                    <Route path="/list/:type" exact component={ Lists } />
                </Switch>
            </Layout>
        </BrowserRouter>

    );
}

export default AppRoutes;