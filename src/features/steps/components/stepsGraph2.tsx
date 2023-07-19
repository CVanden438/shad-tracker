'use client';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface StepsGraphProps {
  steps: { date: string; count: number }[];
}

const StepsGraph2 = ({ steps }: StepsGraphProps) => {
  console.log(steps);
  return (
    <BarChart width={730} height={250} data={steps}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='date' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey='count' fill='#8884d8' />
    </BarChart>
  );
};

export default StepsGraph2;
