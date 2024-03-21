"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

export const options = {
	responsive: true,
	maintainAspectRatio: false,

	plugins: {},
};

export const data = {
	labels: ["New Customers", "Repeated Customers"],
	datasets: [
		{
			label: "",
			data: [34249, 14020],
			backgroundColor: ["rgba(72, 128, 255, 1)", "rgba(72, 128, 255, 0.2)"],
			borderWidth: 0,
		},
	],
};

export function CustomersChart() {
	return <Doughnut width={150} height={150} options={options} data={data} />;
}
