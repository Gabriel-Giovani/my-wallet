import React from 'react';

import LogoImg from '../../assets/logo.svg';
import { Container, Header, Logo, MenuContainer, MenuItemLink, Title } from './style';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';

const Aside: React.FC = () => {
    return(

        <Container>
            <Header>
                <Logo src={ LogoImg } alt="Logo Minha Carteira" />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/dashboard">
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

                <MenuItemLink href="">
                    <MdExitToApp />
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>

    );
}

export default Aside;