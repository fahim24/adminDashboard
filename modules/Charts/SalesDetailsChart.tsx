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
	ScriptableContext,
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
			label: "",
			data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
			borderColor: "#4880FF",
			backgroundColor: (context: ScriptableContext<"line">) => {
				const ctx = context.chart.ctx;
				const gradient = ctx.createLinearGradient(0, 0, 0, 250);
				gradient.addColorStop(0, "rgba(72,128,255, 0.5)");
				gradient.addColorStop(1, "rgba(72,128,255,0)");
				return gradient;
			},
		},
	],
};

export function SalesDetailsChart() {
	return <Line options={options} data={data} className="w-full" />;
}
