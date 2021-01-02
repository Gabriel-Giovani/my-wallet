import React from 'react';
import LogoImg from '../../assets/logo.svg';
import { Container, Header, Logo, MenuContainer, MenuItemLink, MenuItemButton, Title } from './style';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';
import { useAuth } from '../../hooks/auth';

const Aside: React.FC = () => {
    const { signOut } = useAuth();

    return(
        <Container>
            <Header>
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
        </Container>
    );
}

export default Aside;