import React, { useMemo} from 'react';

import Toogle from '../Toogle';
import emojis from '../../utils/emojis';
import { Container, Profile, Welcome, UserName } from './style';

const MainHeader: React.FC = () => {
    
    const emoji = useMemo(() => {

        const index = Math.floor(Math.random() * emojis.length);

        return emojis[index];

    }, []);
    
    return(

        <Container>
            <Toogle />

            <Profile>
                <Welcome>Olá, { emoji }</Welcome>
                <UserName>Gabriel Giovani</UserName>
            </Profile>
        </Container>

    );
}

export default MainHeader;