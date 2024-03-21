"use client";

import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

export const options = {
	responsive: true,
	maintainAspectRatio: false,
	scales: {
		x: {
			grid: {
				display: false,
			},
			border: { display: false },
			ticks: { padding: 10 },
		},
		y: {
			grid: {
				drawTicks: false,
			},
			border: { display: false },
			ticks: { padding: 20 },
		},
	},
	plugins: {},
};

const labels = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
export const data = {
	labels,

	datasets: [
		{
			label: "",
			lineTension: 0.5,
			data: [0, 20, 40, 50, 40, 30, 20, 30, 40, 50, 60, 70],
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
		{
			label: "",
			lineTension: 0.5,
			data: [10, 30, 50, 60, 50, 40, 30, 40, 50, 60, 70, 80],
			borderColor: "rgb(53, 162, 235)",
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
	],
};

export function SalesAnalyticsChart() {
	return <Line options={options} data={data} />;
}
