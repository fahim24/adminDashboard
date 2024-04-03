"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

export const data1 = {
	labels: ["Empty", "Fill"],
	datasets: [
		{
			label: "",
			data: [75, 25],
			backgroundColor: ["#E9EFFC", "#4049FF"],
			borderWidth: 0,
		},
	],
};

export const data2 = {
	labels: ["Fill", "Empty"],
	datasets: [
		{
			label: "",
			data: [25, 75],
			backgroundColor: ["#B140FF", "#E9EFFC"],
			borderWidth: 0,
		},
	],
};

export const data3 = {
	labels: ["Fill", "Empty"],
	datasets: [
		{
			label: "",
			data: [40, 60],
			backgroundColor: ["#FF8743", "#E9EFFC"],
			borderWidth: 0,
		},
	],
};

export const data4 = {
	labels: ["Empty", "Fill"],
	datasets: [
		{
			label: "",
			data: [60, 40],
			backgroundColor: ["#E9EFFC", "#4393FF"],
			borderWidth: 0,
		},
	],
};

export function PieChart1() {
	return <Pie data={data1} />;
}
export function PieChart2() {
	return <Pie data={data2} />;
}
export function PieChart3() {
	return <Pie data={data3} />;
}
export function PieChart4() {
	return <Pie data={data4} />;
}
