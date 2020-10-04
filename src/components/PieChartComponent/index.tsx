import React from 'react';
import { Pie, PieChart, Cell, ResponsiveContainer } from 'recharts';
import { Container, SideLeft, LegendContainer, Legend, SideRight } from './style';
import CountUp from 'react-countup';

interface IPieChartProps{
    data: {
        name: string;
        value: number;
        percent: number;
        color: string;
    }[];
}

const PieChartComponent: React.FC<IPieChartProps> = ({ data }) => (

    <Container>
        <SideLeft>
            <h2>Relação</h2>
            <LegendContainer>
                {
                    data.map((item, index) => (
                        <Legend key={ index } color={ item.color }>
                            <div>
                                <CountUp end={ item.percent } decimals={ 0 } preserveValue={ true } />%
                            </div>
                            <span>{ item.name }</span>
                        </Legend>
                    ))
                }
            </LegendContainer>
        </SideLeft>

        <SideRight>
            <ResponsiveContainer>
                <PieChart>
                    <Pie data={ data } labelLine={false} dataKey="percent" >
                        {
                            data.map((item, index) => (
                                <Cell key={ index } fill={ item.color } />
                            ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </SideRight>
    </Container>

);

export default PieChartComponent;