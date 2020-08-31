import React from 'react';

import { Container, ToogleLabel, ToogleSelector } from './style';

const Toogle: React.FC = () => {
    return(

        <Container>
            <ToogleLabel>Light</ToogleLabel>
            <ToogleSelector 
                checked
                checkedIcon={false}
                uncheckedIcon={false}
                onChange={ () => {} }
            />
            <ToogleLabel>Dark</ToogleLabel>
        </Container>

    );
}

export default Toogle;