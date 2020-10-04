import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts';
import { Container, ChartContainer, Header, LegendContainer, Legend } from './style';
import formatCurrency from '../../utils/formatCurrency';

interface IHistoryMonthBox{
    data:{
        month: string;
        amountEntrys: number;
        amountExits: number;
    }[];
    lineColorAmountEntrys: string;
    lineColorAmountExits: string;
}

const HistoryMonthBox: React.FC<IHistoryMonthBox> = ({ data, lineColorAmountEntrys, lineColorAmountExits }) => (

    <Container>
        <Header>
            <h2>Histórico de saldo</h2>

            <LegendContainer>
                <Legend color={ lineColorAmountEntrys }>
                    <div></div>
                    <span>Entradas</span>
                </Legend>
                <Legend color={ lineColorAmountExits }>
                    <div></div>
                    <span>Saídas</span>
                </Legend>
            </LegendContainer>
        </Header>
        <ChartContainer>
            <ResponsiveContainer>
                <LineChart data={ data } margin={{ top: 5, right: 20, left: 20, bottom: 5 }} >
                    <CartesianGrid strokeDasharray="3 3" stroke="#CECECE" />
                    <XAxis dataKey="month" stroke="#CECECE" />
                    <Tooltip formatter={ (value) => formatCurrency(Number(value)) } />
                    <Line
                        type="monotone"
                        dataKey="amountEntrys"
                        name="Entradas"
                        stroke={ lineColorAmountEntrys }
                        strokeWidth={ 5 }
                        dot={{ r:5 }}
                        activeDot={{ r:8 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="amountExits"
                        name="Saídas"
                        stroke={ lineColorAmountExits }
                        strokeWidth={ 5 }
                        dot={{ r:5 }}
                        activeDot={{ r:8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
    </Container>

);

export default HistoryMonthBox;