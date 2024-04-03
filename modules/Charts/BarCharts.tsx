"use client";
import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export const options1 = {
	responsive: true,
	maintainAspectRatio: false,
	scales: {
		x: {
			grid: {
				display: false,
			},
			border: { display: false },
			ticks: { display: false },
		},
		y: {
			grid: {
				display: false,
			},
			border: { display: false },
			ticks: { display: false },
		},
	},
};

export const options2 = {
	responsive: true,
	maintainAspectRatio: false,
	scales: {
		x: {
			stacked: true,
			grid: {
				display: false,
			},
			border: { display: false },
			ticks: { display: false },
		},
		y: {
			stacked: true,
			grid: {
				display: false,
			},
			border: { display: false },
			ticks: { display: false },
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

export const data1 = {
	labels,
	datasets: [
		{
			label: "Dataset 1",
			data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
			backgroundColor: "#5286F8",
			borderRadius: 10,
			barPercentage: 0.5,
		},
	],
};

export const data2 = {
	labels,
	datasets: [
		{
			label: "Dataset 1",
			data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
			backgroundColor: "#EDF0F4",
			borderRadius: 10,
			barPercentage: 0.5,
		},
		{
			label: "Dataset 2",
			data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
			backgroundColor: "#1CCAB8",
			borderRadius: 10,
			barPercentage: 0.5,
		},
		{
			label: "Dataset 3",
			data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
			backgroundColor: "#BDEEE1",
			borderRadius: 10,
			barPercentage: 0.5,
		},
		{
			label: "Dataset 4",
			data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
			backgroundColor: "#D0F1FA",
			borderRadius: 10,
			barPercentage: 0.5,
		},
	],
};

export const data3 = {
	labels,
	datasets: [
		{
			label: "Dataset 1",
			data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
			backgroundColor: "#4049FF",
			borderRadius: 10,
			barPercentage: 0.5,
		},
		{
			label: "Dataset 2",
			data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
			backgroundColor: "#FF9000",
			borderRadius: 10,
			barPercentage: 0.5,
		},
	],
};

export const data4 = {
	labels,
	datasets: [
		{
			label: "Dataset 1",
			data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
			backgroundColor: "#FF5DA0",
			borderRadius: 10,
			barPercentage: 0.5,
		},
		{
			label: "Dataset 2",
			data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
			backgroundColor: "#FF84B7",
			borderRadius: 10,
			barPercentage: 0.5,
		},
		{
			label: "Dataset 3",
			data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
			backgroundColor: "#FFBDD8",
			borderRadius: 10,
			barPercentage: 0.5,
		},
		{
			label: "Dataset 4",
			data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
			backgroundColor: "#FFE5F0",
			borderRadius: 10,
			barPercentage: 0.5,
		},
	],
};

export function BarChart1() {
	return <Bar options={options1} data={data1} />;
}

export function BarChart2() {
	return <Bar options={options2} data={data2} />;
}

export function BarChart3() {
	return <Bar options={options1} data={data3} />;
}

export function BarChart4() {
	return <Bar options={options2} data={data4} />;
}
