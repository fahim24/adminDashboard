// Import from react
import React from "react";
// Import from next
import { Metadata } from "next";
import { ImFilter } from "react-icons/im";
import { FaAngleDown } from "react-icons/fa";
import { BarChart1, BarChart2, BarChart3, BarChart4 } from "@/modules/Charts/BarCharts";
import { PieChart1, PieChart4, PieChart3, PieChart2 } from "@/modules/Charts/PieCharts";
import {
	DoughnutChart1,
	DoughnutChart4,
	DoughnutChart3,
	DoughnutChart2,
} from "@/modules/Charts/DoughnutCharts";

// Title and Metadata for the Ui Elements Page
export const metadata: Metadata = {
	title: "UI Elements",
};

export default function UiElementsPage() {
	return (
		// Ui Elements Page Start
		<div className="space-y-5 mb-10">
			{/* Page Heading Start */}
			<div className="flex flex-col md:flex-row gap-5 items-start md:items-center justify-between mb-5">
				<p className="text-3xl text-CDark font-bold">UI Elements</p>
				<div className="bg-white flex border rounded-xl w-fit divide-x text-sm font-semibold">
					<div className="p-2.5 hover:bg-CBG flex items-center justify-center">
						<ImFilter />
					</div>
					<div className="p-2.5 hover:bg-CBG flex items-center justify-center">Filter By</div>
					<button className="p-2.5 hover:bg-CBG flex items-center justify-center gap-5">
						Charts
						<FaAngleDown />
					</button>
				</div>
			</div>
			{/* Page Content Start */}
			{/* Bar Chart Start */}
			<div className="bg-white rounded-xl p-5">
				<p className="text-2xl font-bold mb-5">Bar Chart</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
					<div className="p-2">
						<BarChart1 />
					</div>
					<div className="p-2">
						<BarChart2 />
					</div>
					<div className="p-2">
						<BarChart3 />
					</div>
					<div className="p-2">
						<BarChart4 />
					</div>
				</div>
			</div>
			{/* Pie Chart Start */}
			<div className="bg-white rounded-xl p-5">
				<p className="text-2xl font-bold mb-5">Pie Chart</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
					<div className="p-4">
						<PieChart1 />
					</div>
					<div className="p-4">
						<PieChart2 />
					</div>
					<div className="p-4">
						<PieChart3 />
					</div>
					<div className="p-4">
						<PieChart4 />
					</div>
				</div>
			</div>
			{/* Doughnut Chart Start */}
			<div className="bg-white rounded-xl p-5">
				<p className="text-2xl font-bold mb-5">Donut Chart</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
					<div className="p-4">
						<DoughnutChart1 />
					</div>
					<div className="p-4">
						<DoughnutChart2 />
					</div>
					<div className="p-4">
						<DoughnutChart3 />
					</div>
					<div className="p-4">
						<DoughnutChart4 />
					</div>
				</div>
			</div>
			{/* Page Content End */}
		</div>
	);
}
