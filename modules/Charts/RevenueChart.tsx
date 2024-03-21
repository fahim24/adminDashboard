"use client";

import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

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
	plugins: {
		tooltip: {
			displayColors: false,
			backgroundColor: "#4880FF",
			titleColor: "white",
			callbacks: {
				title: () => {
					return "";
				},
			},
		},
	},
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
			fill: true,
			lineTension: 0.5,
			label: "",
			radius: 0,
			data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
			borderColor: "rgb(255,	143,	109)",
			backgroundColor: "rgba(255,	143,	109,0.8)",
		},
		{
			fill: true,
			lineTension: 0.5,
			label: "",
			radius: 0,
			data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
			borderColor: "rgb(	219,	165	,255)",
			backgroundColor: "rgba(	219,	165	,255,0.8)",
		},
	],
};

export function RevenueChart() {
	return <Line options={options} data={data} className="w-full" />;
}
