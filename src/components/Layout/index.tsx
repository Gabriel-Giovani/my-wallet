import React, { Fragment } from 'react';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';

import { Grid } from './style';

const Layout: React.FC = ({ children }) => {
    return(

        <Grid>
            <MainHeader />
            <Aside />
            <Content>
                { children }
            </Content>
        </Grid>

    );
}

export default Layout;