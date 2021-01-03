import styled, { css } from 'styled-components';

interface IContainerProps{
    isOpen: boolean;
}

interface IThemeToogleFooter{
    isOpen: boolean;
}

export const Container = styled.div<IContainerProps>`

    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray};
    position: relative;

    @media(max-width: 599px){
        padding-left: 7px;
        position: fixed;
        z-index: 2;
        height: ${props => props.isOpen ? '100vh' : '70px'};
        overflow: hidden;
        width: 200px;

        ${
            props => !props.isOpen && css`
                border: none;
                border-bottom: 1px solid ${props => props.theme.colors.gray};
        `};
    }

`;

export const Header = styled.header`

    display: flex;
    align-items: center;
    height: 70px;

`;

export const Logo = styled.img`

    height: 40px;
    width: 40px;

    @media(max-width: 599px){
        display: none;
    }

`;

export const Title = styled.h3`

    color: ${props => props.theme.colors.white};
    margin-left: 10px;

    @media(max-width: 599px){
        display: none;
    }

`;

export const MenuContainer = styled.nav`

    margin-top: 50px;
    display: flex;
    flex-direction: column;

`;

export const MenuItemLink = styled.a`

    display: flex;
    align-items: center;
    margin: 7px 0;
    color: ${props => props.theme.colors.info};
    text-decoration: none;
    transition: .3s ease;

    &:hover{
        opacity: .7;
    }

    > svg{
        font-size: 18px;
        margin-right: 5px;
    }

`;

export const MenuItemButton = styled.button`

    display: flex;
    align-items: center;
    margin: 7px 0;
    color: ${props => props.theme.colors.info};
    font-size: 16px;
    border: none;
    background: none;
    text-decoration: none;
    transition: .3s ease;

    &:hover{
        opacity: .7;
    }

    > svg{
        font-size: 18px;
        margin-right: 5px;
    }

`;

export const ToogleMenu = styled.button`

    width: 40px;
    height: 40px;
    border-radius: 5px;
    font-size: 22px;
    background-color: ${props => props.theme.colors.warning};
    color: ${props => props.theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity .3s;

    &:hover{
        opacity: .7;
    }

    @media(min-width: 767px){
        display: none;
    }

`;

export const ThemeToogleFooter = styled.footer<IThemeToogleFooter>`

    display: none;
    position: absolute;
    bottom: 30px;

    @media(max-width: 599px){
        display: ${props => props.isOpen ? 'flex' : 'none'};
    }

`;