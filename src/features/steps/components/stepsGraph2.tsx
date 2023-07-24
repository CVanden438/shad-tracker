'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface StepsGraphProps {
  steps: { date: string; count: number }[];
}

const StepsGraph2 = ({ steps }: StepsGraphProps) => {
  return (
    <ResponsiveContainer height={400} width={600}>
      <BarChart width={730} height={250} data={steps}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='count' fill='#8884d8' />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StepsGraph2;
