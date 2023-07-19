'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'steps',
      data: labels.map(() => 100),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

interface StepsGraphProps {
  steps: { date: string; count: number }[];
}

const getLabels = (steps: { date: string; count: number }[]) => {
  const labels: string[] = [];
  for (const element of steps) {
    labels.push(element.date);
  }
  return labels;
};

const getData = (steps: { date: string; count: number }[]) => {
  const data: number[] = [];
  for (const element of steps) {
    data.push(element.count);
  }
  return data;
};

export default function StepsGraph({ steps }: StepsGraphProps) {
  const labels = getLabels(steps);
  const values = getData(steps);
  const data = {
    labels,
    datasets: [
      {
        label: 'steps',
        data: values,
        backgroundColor: 'rgba(255,99,132,0.5)',
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
