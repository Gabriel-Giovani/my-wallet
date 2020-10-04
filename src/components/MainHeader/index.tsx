import React, { useMemo, useState } from 'react';

import Toogle from '../Toogle';
import emojis from '../../utils/emojis';
import { Container, Profile, Welcome, UserName } from './style';
import { useTheme } from '../../hooks/theme';

const MainHeader: React.FC = () => {
    const { toggleTheme, theme } = useTheme();
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);
    
    const emoji = useMemo(() => {
        const index = Math.floor(Math.random() * emojis.length);
        return emojis[index];
    }, []);

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }
    
    return(

        <Container>
            <Toogle
                labelLeft="Light"
                labelRight="Dark"
                checked={darkTheme}
                onChange={handleChangeTheme}
            />

            <Profile>
                <Welcome>Olá, { emoji }</Welcome>
                <UserName>Gabriel Giovani</UserName>
            </Profile>
        </Container>

    );
}

export default MainHeader;