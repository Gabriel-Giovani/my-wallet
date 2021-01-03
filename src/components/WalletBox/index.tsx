import React, { useMemo } from 'react';

import CountUp from 'react-countup';
import dolarImg from '../../assets/dolar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';
import { Container } from './style';

interface IWalletBoxProps{
    title: string;
    amount: number;
    footerLabel: string;
    backgroundIcon: 'dolar' | 'arrowUp' | 'arrowDown';
    backgroundColor: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({title, amount, footerLabel, backgroundIcon, backgroundColor}) => {
    
    const iconSelected = useMemo(() => {

        if(backgroundIcon === 'dolar')
            return dolarImg;

        if(backgroundIcon === 'arrowUp')
            return arrowUpImg;
            
        if(backgroundIcon === 'arrowDown')
            return arrowDownImg;

    }, [backgroundIcon]);

    return(

        <Container backgroundColor={ backgroundColor }>
            <span>{ title }</span>
            <h1>
                <strong>R$ </strong>
                <CountUp
                    end={ amount }
                    separator="."
                    decimal=","
                    decimals={ 2 }
                    preserveValue={ true }
                />
            </h1>
            <small>{ footerLabel }</small>
            <img src={ iconSelected } alt={ title } />
        </Container>

    );
}

export default WalletBox;