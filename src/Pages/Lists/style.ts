import styled from 'styled-components';

export const Container = styled.div`



`;

export const Content = styled.div`



`;

export const Filters = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;

    .tagFilter{
        font-size: 18px;
        font-weight: 500;
        background: none;
        color: ${props => props.theme.colors.white};
        margin: 0 10px;
        transition: .3s ease;

        &:hover{
            opacity: .7;
        }

        &::after{
            content: '';
            display: block;
            width: 55px;
            margin: 0 auto;
        }
    }

    .tagFilter-recurrents{
        &::after{
            border-bottom: 10px solid ${props => props.theme.colors.success};
        }
    }

    .tagFilter-eventual{
        &::after{
            border-bottom: 10px solid ${props => props.theme.colors.warning};
        }
    }

`;