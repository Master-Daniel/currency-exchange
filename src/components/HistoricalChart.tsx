import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface HistoricalChartProps {
    data: { date: string; rate: number }[];
    baseCurrency: string;
    targetCurrency: string;
}

const HistoricalChart: React.FC<HistoricalChartProps> = ({ data, baseCurrency, targetCurrency }) => {
    const chartData = {
        labels: data.map((entry) => entry.date),
        datasets: [
            {
                label: `${baseCurrency.toLocaleUpperCase()} to ${targetCurrency.toLocaleUpperCase()}`,
                data: data.map((entry) => entry.rate),
                borderColor: "#4A90E2",
                backgroundColor: "rgba(74, 144, 226, 0.2)",
                borderWidth: 2,
                pointRadius: 4,
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: true },
            tooltip: { enabled: true },
        },
        scales: {
            x: { display: true, title: { display: true, text: "Date" } },
            y: { display: true, title: { display: true, text: "Exchange Rate" } },
        },
    };

    return (
        <div className="max-w-6xl sm:max-w-3/5 mx-auto">
            <h2 className="text-lg font-semibold mb-4">Exchange Rate Trend</h2>
            <div className="h-80">
                <Line data={chartData} options={options} />
            </div>
        </div>
    );
};

export default HistoricalChart;
