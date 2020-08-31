import React, { useMemo } from 'react';

import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import ContentHeader from '../../components/ContentHeader';
import { Container, Content, Filters } from './style';

interface IRouteParams{
    match:{
        params:{
            type: string;
        }
    }
}

const Lists: React.FC<IRouteParams> = ({ match }) => {
    
    const { type } = match.params;

    const title = useMemo(() => {

        return type === 'entrys' ? 'Entradas' : 'Saídas';

    },[type]);

    const lineColor = useMemo(() => {

        return type === 'entrys' ? '#F7931B' : '#E44C4E';

    }, [type]);

    const mounths = [
        {value: 8, label: 'Agosto'},
        {value: 9, label: 'Setembro'},
        {value: 10, label: 'Outubro'},
        {value: 11, label: 'Novembro'},
        {value: 12, label: 'Dezembro'},
    ];
    
    const years = [
        {value: 2020, label: 2020},
        {value: 2019, label: 2019},
        {value: 2018, label: 2018},
    ];
    
    return(

        <Container>
            <ContentHeader title={ title } lineColor={ lineColor }>
                <SelectInput options={ mounths } />
                <SelectInput options={ years } />
            </ContentHeader>

            <Filters>
                <button type="button" className="tagFilter tagFilter-recurrents">
                    Recorrentes
                </button>

                <button type="button" className="tagFilter tagFilter-eventual">
                    Eventuais
                </button>
            </Filters>

            <Content>
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subTitle="30/08/2020"
                    amount="R$ 150,00"
                />

                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subTitle="30/08/2020"
                    amount="R$ 150,00"
                />

                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subTitle="30/08/2020"
                    amount="R$ 150,00"
                />

                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subTitle="30/08/2020"
                    amount="R$ 150,00"
                />

                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subTitle="30/08/2020"
                    amount="R$ 150,00"
                />

                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subTitle="30/08/2020"
                    amount="R$ 150,00"
                />

                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subTitle="30/08/2020"
                    amount="R$ 150,00"
                />

                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subTitle="30/08/2020"
                    amount="R$ 150,00"
                />

                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subTitle="30/08/2020"
                    amount="R$ 150,00"
                />

                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subTitle="30/08/2020"
                    amount="R$ 150,00"
                />

                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subTitle="30/08/2020"
                    amount="R$ 150,00"
                />
            </Content>
        </Container>

    );
}

export default Lists;