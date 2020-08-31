import React, { Fragment } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { Container } from './style';

const Dashboard: React.FC = () => {

    const options = [
        {value: 'Gabriel', label: 'Gabriel'},
        {value: 'Nadine', label: 'Nadine'},
        {value: 'Renan', label: 'Renan'},
        {value: 'Laura', label: 'Laura'},
    ];
    
    const fruits = [
        {value: 'Maçã', label: 'Maçã'},
        {value: 'Banana', label: 'Banana'},
        {value: 'Pêssego', label: 'Pêssego'},
        {value: 'Mamão', label: 'Mamão'},
    ];

    return(
        
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput options={ options } />
                <SelectInput options={ fruits } />
            </ContentHeader>
        </Container>

    );
}

export default Dashboard;