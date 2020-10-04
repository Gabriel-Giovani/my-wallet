import React, { useMemo, useState, useEffect } from 'react';

import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import ContentHeader from '../../components/ContentHeader';
import { Container, Content, Filters } from './style';
import entrys from '../../repositories/gains';
import exits from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import listMonths from '../../utils/months';

interface IRouteParams{
    match:{
        params:{
            type: string;
        }
    }
}

interface IData{
    id: number;
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}

const Lists: React.FC<IRouteParams> = ({ match }) => {

    const [data, setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
    const [frequencySelected, setFrequencySelected] = useState<string[]>(['recorrente', 'eventual']);

    const { type } = match.params;

    const title = useMemo(() => {

        return type === 'entrys' ? 'Entradas' : 'Saídas';

    },[type]);

    const lineColor = useMemo(() => {

        return type === 'entrys' ? '#4E41F0' : '#E44C4E';

    }, [type]);

    const listData = useMemo(() => {

        return type === 'entrys' ? entrys : exits;

    }, [type]);

    useEffect(() => {

        const filteredDate = listData.filter(item => {

            const date = new Date(item.date);
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return month === monthSelected && year === yearSelected && frequencySelected.includes(item.frequency);
        
        });

        const dateFormatted = filteredDate.map(item => {

            return{
                id: item.id,
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
            }

        });

        setData(dateFormatted);

    }, [listData, monthSelected, yearSelected, frequencySelected]);

    const months = useMemo(() => {
        
        return listMonths.map((month, index) => {
            return{
                value: index + 1,
                label: month
            }
        });

    }, []);

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        listData.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if(!uniqueYears.includes(year))
                uniqueYears.push(year);
        });

        return uniqueYears.map(item => {
            return{
                value: item,
                label: item
            }
        });
    }, [listData]);

    const handleFrequencyClick = (frequency: string) => {

        const alreadySelected = frequencySelected.findIndex(item => item === frequency);

        if(alreadySelected >= 0){
            const filtered = frequencySelected.filter(item => item !== frequency);
            setFrequencySelected(filtered);
        }
        else{
            setFrequencySelected((prev) => [...prev, frequency]);
        }
    }

    const handleMonthSelected = (month: string) => {
        try{
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        }
        catch(err){
            throw new Error('Invalid month value. Is accept 0 - 12.');
        }
    }

    const handleYearSelected = (year: string) => {
        try{
            const parseYear = Number(year);
            setYearSelected(parseYear);
        }
        catch(err){
            throw new Error('Invalid year value. Is accept integer number.');
        }
    }
    
    return(

        <Container>
            <ContentHeader title={ title } lineColor={ lineColor }>
                <SelectInput options={ months } onChange={(e) => handleMonthSelected(e.target.value)} defaultValue={monthSelected} />
                <SelectInput options={ years } onChange={(e) => handleYearSelected(e.target.value)} defaultValue={yearSelected} />
            </ContentHeader>

            <Filters>
                <button type="button" className={`tagFilter tagFilter-recurrents ${frequencySelected.includes('recorrente') && 'tag-actived'}`} onClick={() => handleFrequencyClick('recorrente')}>
                    Recorrentes
                </button>

                <button type="button" className={`tagFilter tagFilter-eventual ${frequencySelected.includes('eventual') && 'tag-actived'}`} onClick={() => handleFrequencyClick('eventual')}>
                    Eventuais
                </button>
            </Filters>

            <Content>
                {
                    data.map(item => (
                        <HistoryFinanceCard
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subTitle={item.dateFormatted}
                            amount={item.amountFormatted}
                        />
                    ))
                }
            </Content>
        </Container>

    );
}

export default Lists;