import React from 'react';
import { Container, ToogleLabel, ToogleSelector } from './style';

interface IToggleProps{
    labelLeft: string;
    labelRight: string;
    checked: boolean;
    onChange(): void;
}

const Toogle: React.FC<IToggleProps> = ({ labelLeft, labelRight, checked, onChange }) => {
    return(

        <Container>
            <ToogleLabel>{labelLeft}</ToogleLabel>
            <ToogleSelector 
                checked={checked}
                checkedIcon={false}
                uncheckedIcon={false}
                onChange={onChange}
            />
            <ToogleLabel>{labelRight}</ToogleLabel>
        </Container>

    );
}

export default Toogle;