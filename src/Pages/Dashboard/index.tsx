import React, { useState, useMemo, useCallback } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import entrys from '../../repositories/gains';
import exits from '../../repositories/expenses';
import listMonths from '../../utils/months';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import { Container, Content } from './style';
import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import indiferent from '../../assets/indiferent.svg';
import thinking from '../../assets/thinking.svg';
import PieChartComponent from '../../components/PieChartComponent';
import HistoryMonthBox from '../../components/HistoryMonthBox';
import BarChartComponent from '../../components/BarChartComponent';

const Dashboard: React.FC = () => {

    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

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

        [...entrys, ...exits].forEach(item => {
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
    }, []);

    const totalExits = useMemo(() => {
        let total: number = 0;

        exits.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if(month === monthSelected && year === yearSelected){
                total += Number(item.amount);
            }
            
        });

        return total;

    }, [monthSelected, yearSelected]);

    const totalEntrys = useMemo(() => {
        let total: number = 0;

        entrys.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if(month === monthSelected && year === yearSelected){
                total += Number(item.amount);
            }
            
        });

        return total;
        
    }, [monthSelected, yearSelected]);

    const balance = useMemo(() => {
        return totalEntrys - totalExits;
    }, [totalEntrys, totalExits]);

    const message = useMemo(() => {
        if(balance < 0){
            return{
                title: "Que pena...",
                description: "Sua carteira está negativa!",
                footerText: "Verifique suas saídas e tente diminuir os gastos desnecessários.",
                icon: sadImg
            } 
        }

        else if(totalEntrys === 0 && totalExits === 0){
            return{
                title: "Ops...",
                description: "Não há registros neste mês!",
                footerText: "Parece que não houveram entradas e nem saídas neste mês.",
                icon: thinking
            }
        }

        else if(balance === 0){
            return{
                title: "Ufaaa...",
                description: "Não sobrou nada este mês!",
                footerText: "Tenha cuidado. No próximo mês, tente poupar seus ganhos.",
                icon: indiferent
            }
        }

        else{
            return{
                title: "Muito bem!",
                description: "Sua carteira está positiva!",
                footerText: "Continue assim. Considere investir o seu saldo.",
                icon: happyImg
            }
        }
    }, [balance, totalEntrys, totalExits]);

    const percentageEntrysAndExits = useMemo(() => {
        const total = totalEntrys + totalExits;
        
        const percentEntrys = (totalEntrys / total) * 100;
        const percentExits = (totalExits / total) * 100;
        const percentEntrysFormatted = Number(percentEntrys.toFixed(1));
        const percentExitsFormatted = Number(percentExits.toFixed(1));

        const data = [
            { name: "Entradas", value: totalEntrys, percent: percentEntrysFormatted ? percentEntrysFormatted : 0, color: '#F7931B' },
            { name: "Saídas", value: totalExits, percent: percentExitsFormatted ? percentExitsFormatted : 0, color: '#E44C4e' }
        ];

        return data;
    }, [totalEntrys, totalExits]);

    const historyData = useMemo(() => {
        return listMonths.map((_, monthIndex) => {
            let amountEntrys = 0;

            entrys.forEach(entry => {
                const date = new Date(entry.date);
                const entryMonth = date.getMonth();
                const entryYear = date.getFullYear();

                if(entryMonth === monthIndex && entryYear === yearSelected){
                    try{
                        amountEntrys += Number(entry.amount);
                    }
                    catch(err){
                        throw new Error('Amount Entry is invalid, must be a valid number.');
                    }
                }
            });

            let amountExits = 0;

            exits.forEach(exit => {
                const date = new Date(exit.date);
                const exitMonth = date.getMonth();
                const exitYear = date.getFullYear();

                if(exitMonth === monthIndex && exitYear === yearSelected){
                    try{
                        amountExits += Number(exit.amount);
                    }
                    catch(err){
                        throw new Error('Amount Exit is invalid, must be a valid number.');
                    }
                }
            });

            return{
                monthNumber: monthIndex,
                month: listMonths[monthIndex].substr(0, 3),
                amountEntrys,
                amountExits
            }

        }).filter(item => {
            const currentMonth = new Date().getMonth();
            const currentYear = new Date().getFullYear();

            return (yearSelected === currentYear && item.monthNumber <= currentMonth) || (yearSelected < currentYear)
        });
    }, [yearSelected]);

    const relationshipExitsRecurrentAndEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        exits.filter((exit) => {
            const date = new Date(exit.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            return month === monthSelected && year === yearSelected;
        }).forEach((exit) => {
            if(exit.frequency === 'recorrente'){
                amountRecurrent += Number(exit.amount);
            }

            if(exit.frequency === 'eventual'){
                amountEventual += Number(exit.amount);
            }
        });

        const total = amountRecurrent + amountEventual;
        const percentRecurrent = Number(((amountRecurrent / total) * 100).toFixed(1));
        const percentEventual = Number(((amountEventual / total) * 100).toFixed(1));

        return [
            { name: 'Recorrentes', amount: amountRecurrent, percent: percentRecurrent ? percentRecurrent : 0, color: '#F7931B' },
            { name: 'Eventuais', amount: amountEventual, percent: percentEventual ? percentEventual : 0, color: '#E44C4E' }
        ];
    }, [monthSelected, yearSelected]);

    const relationshipEntrysRecurrentAndEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        entrys.filter((entry) => {
            const date = new Date(entry.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            return month === monthSelected && year === yearSelected;
        }).forEach((entry) => {
            if(entry.frequency === 'recorrente'){
                amountRecurrent += Number(entry.amount);
            }

            if(entry.frequency === 'eventual'){
                amountEventual += Number(entry.amount);
            }
        });

        const total = amountRecurrent + amountEventual;
        const percentRecurrent = Number(((amountRecurrent / total) * 100).toFixed(1));
        const percentEventual = Number(((amountEventual / total) * 100).toFixed(1));

        return [
            { name: 'Recorrentes', amount: amountRecurrent, percent: percentRecurrent ? percentRecurrent : 0, color: '#F7931B' },
            { name: 'Eventuais', amount: amountEventual, percent: percentEventual ? percentEventual : 0, color: '#E44C4E' }
        ];
    }, [monthSelected, yearSelected]);

    const handleMonthSelected = useCallback((month: string) => {
        try{
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        }
        catch(err){
            throw new Error('Invalid month value. Is accept 0 - 12.');
        }
    }, []);

    const handleYearSelected = useCallback((year: string) => {
        try{
            const parseYear = Number(year);
            setYearSelected(parseYear);
        }
        catch(err){
            throw new Error('Invalid year value. Is accept integer number.');
        }
    }, []);

    return(
        
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput options={ months } onChange={(e) => handleMonthSelected(e.target.value)} defaultValue={monthSelected} />
                <SelectInput options={ years } onChange={(e) => handleYearSelected(e.target.value)} defaultValue={yearSelected} />
            </ContentHeader>

            <Content>
                <WalletBox
                    title="Saldo"
                    amount={ balance }
                    footerLabel="Atualizado com base nas entradas e saídas."
                    backgroundIcon="dolar"
                    backgroundColor="#4E41F0"
                />

                <WalletBox
                    title="Entradas"
                    amount={ totalEntrys }
                    footerLabel="Atualizado com base nas entradas e saídas."
                    backgroundIcon="arrowUp"
                    backgroundColor="#F7931B"
                />

                <WalletBox
                    title="Saídas"
                    amount={ totalExits }
                    footerLabel="Atualizado com base nas entradas e saídas."
                    backgroundIcon="arrowDown"
                    backgroundColor="#E44C4E"
                />

                <MessageBox
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                    icon={message.icon}
                />

                <PieChartComponent data={ percentageEntrysAndExits }  />

                <HistoryMonthBox
                    data={ historyData }
                    lineColorAmountEntrys="#F7931B"
                    lineColorAmountExits="#E44C4E"
                />

                <BarChartComponent
                    data={ relationshipEntrysRecurrentAndEventual }
                    title="Entradas"
                />
                <BarChartComponent
                    data={ relationshipExitsRecurrentAndEventual }
                    title="Saídas"
                />
            </Content>
        </Container>

    );
}

export default Dashboard;