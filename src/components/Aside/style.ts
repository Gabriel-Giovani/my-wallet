import styled from 'styled-components';

export const Container = styled.div`

    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray};

`;

export const Header = styled.header`

    display: flex;
    align-items: center;
    height: 70px;

`;

export const Logo = styled.img`

    height: 40px;
    width: 40px;

`;

export const Title = styled.h3`

    color: ${props => props.theme.colors.white};
    margin-left: 10px;

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
