"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

export const data1 = {
	labels: ["Green", "Empty"],
	datasets: [
		{
			label: "",
			data: [50, 50],
			backgroundColor: ["#1CCAB8", "#E9EFFC"],
			borderWidth: 0,
		},
	],
};

export const data2 = {
	labels: ["Blue", "Orange", "Empty"],
	datasets: [
		{
			label: "",
			data: [50, 25, 25],
			backgroundColor: ["#448EFC", "#FF8743", "#E9EFFC"],
			borderWidth: 0,
		},
	],
};

export const data3 = {
	labels: ["Green", "Blue", "Yellow"],
	datasets: [
		{
			label: "",
			data: [50, 25, 25],
			backgroundColor: ["#1CCAB8", "#4393FF", "#FF8743"],
			borderWidth: 0,
		},
	],
};

export const data4 = {
	labels: ["Green", "Blue", "Orange", "Yellow"],
	datasets: [
		{
			label: "",
			data: [50, 25, 15, 10],
			backgroundColor: ["#1CCAB8", "#4393FF", "#FF8743", "#FFD56D"],
			borderWidth: 0,
		},
	],
};

export function DoughnutChart1() {
	return <Doughnut data={data1} />;
}
export function DoughnutChart2() {
	return <Doughnut data={data2} />;
}
export function DoughnutChart3() {
	return <Doughnut data={data3} />;
}
export function DoughnutChart4() {
	return <Doughnut data={data4} />;
}
