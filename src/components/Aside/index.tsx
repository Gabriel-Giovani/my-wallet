import React, { useState } from 'react';
import Toogle from '../Toogle';
import LogoImg from '../../assets/logo.svg';
import { Container, Header, Logo, MenuContainer, MenuItemLink, MenuItemButton, Title, ToogleMenu, ThemeToogleFooter } from './style';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp, MdClose, MdMenu } from 'react-icons/md';
import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

const Aside: React.FC = () => {
    const { signOut } = useAuth();
    const { toggleTheme, theme } = useTheme();

    const [menuIsOpened, setMenuIsopened] = useState(false);
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

    const handleToogleMenu = () => {
        setMenuIsopened(!menuIsOpened);
    }

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    return(
        <Container isOpen={menuIsOpened}>
            <Header>
                <ToogleMenu onClick={handleToogleMenu}>
                    { menuIsOpened ? <MdClose/> : <MdMenu/> }
                </ToogleMenu>
                <Logo src={ LogoImg } alt="Logo Minha Carteira" />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/">
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>

                <MenuItemLink href="/list/entrys">
                    <MdArrowUpward />
                    Entradas
                </MenuItemLink>

                <MenuItemLink href="/list/exits">
                    <MdArrowDownward />
                    Saídas
                </MenuItemLink>

                <MenuItemButton onClick={signOut}>
                    <MdExitToApp />
                    Sair
                </MenuItemButton>
            </MenuContainer>

            <ThemeToogleFooter isOpen={menuIsOpened}>
                <Toogle
                    labelLeft="Light"
                    labelRight="Dark"
                    checked={darkTheme}
                    onChange={handleChangeTheme}
                />
            </ThemeToogleFooter>
        </Container>
    );
}

export default Aside;