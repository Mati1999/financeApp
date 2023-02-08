import React,{ PureComponent } from 'react';
import { BarChart,Bar,Cell,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer,Customized,Cross } from 'recharts';
import '../styles/historialBarChart.scss';

const data = [
  {
    name: '05/02',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '06/02',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '07/02',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '08/02',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '09/02',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '10/02',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '11/02',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];



const HistorialBarChart = () => {

  return (
    <ResponsiveContainer width="100%" height="40%" className="responsiveBarChart">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="none" />
        <XAxis dataKey="name" />
        <YAxis fill='#ff2c2c' />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" stackId="a" fill="#ff2c2c" />
        <Bar dataKey="uv" stackId="a" fill="#00d17e" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default HistorialBarChart


