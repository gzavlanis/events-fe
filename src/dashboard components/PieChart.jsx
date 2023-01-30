import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

export default function PieChart() {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
        labels: ['Cat 1', 'Cat 2', 'Cat 3', 'Cat 4'],
        datasets: [
            {
                label: 'Event categories',
                data: [12, 19, 3, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div style = {{height: "35vh", width: "100%"}} className = "text-center">
            <Pie data = {data} options={{ responsive: true, maintainAspectRatio: false }}/>
        </div>
    );
}