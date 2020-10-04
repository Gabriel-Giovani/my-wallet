import React from 'react';
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts';
import { Container, SideLeft, SideRight, LegendContainer, Legend } from './style';
import formatCurrency from '../../utils/formatCurrency';
import CountUp from 'react-countup';

interface IBarChartProps{
    title: string;
    data: {
        name: string;
        amount: number;
        percent: number;
        color: string;
    }[],
}

const BarCharComponent: React.FC<IBarChartProps> = ({ title, data }) => {
    console.log(data);
    return(

        <Container>
            <SideLeft>
                <h2>{ title }</h2>
                <LegendContainer>
                {
                    data.map((item, index) => (
                        <Legend key={ index } color={ item.color }>
                            <div>
                                <CountUp end={ item.percent } decimals={ 0 } preserveValue={ false } />%
                            </div>
                            <span>{ item.name }</span>
                        </Legend>
                    ))
                }
            </LegendContainer>
            </SideLeft>

            <SideRight>
                <ResponsiveContainer>
                    <BarChart data={ data }>
                        <Bar dataKey="amount" name="Valor">
                            {
                                data.map((item, index) => (
                                    <Cell
                                        key={ index }
                                        fill={ item.color }
                                        cursor='pointer'
                                    />
                                ))
                            }
                        </Bar>
                        <Tooltip cursor={{ fill: 'none' }} formatter={ (value) => formatCurrency(Number(value)) } />
                    </BarChart>
                </ResponsiveContainer>
            </SideRight>
        </Container>

    );
}

export default BarCharComponent;