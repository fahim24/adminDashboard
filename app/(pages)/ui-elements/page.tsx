// Import from react
import React from "react";
// Import from next
import { Metadata } from "next";
import { ImFilter } from "react-icons/im";
import { FaAngleDown } from "react-icons/fa";

// Title and Metadata for the Ui Elements Page
export const metadata: Metadata = {
	title: "UI Elements",
};

export default function UiElementsPage() {
	return (
		// Ui Elements Page Start
		<div className="space-y-5 mb-10">
			{/* Page Heading Start */}
			<div className="flex items-center justify-between mb-5">
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
			<div className="bg-white rounded-xl p-5">
				<p className="text-2xl font-bold mb-5">Bar Chart</p>

				<div className="grid grid-cols-4 gap-5 text-center">
					<div>Bar Chart 1</div>
					<div>Bar Chart 2</div>
					<div>Bar Chart 3</div>
					<div>Bar Chart 4</div>
				</div>
			</div>
			<div className="bg-white rounded-xl p-5">
				<p className="text-2xl font-bold mb-5">Pie Chart</p>

				<div className="grid grid-cols-4 gap-5 text-center">
					<div>Pie Chart 1</div>
					<div>Pie Chart 2</div>
					<div>Pie Chart 3</div>
					<div>Pie Chart 4</div>
				</div>
			</div>
			<div className="bg-white rounded-xl p-5">
				<p className="text-2xl font-bold mb-5">Donut Chart</p>

				<div className="grid grid-cols-4 gap-5 text-center">
					<div>Donut Chart 1</div>
					<div>Donut Chart 2</div>
					<div>Donut Chart 3</div>
					<div>Donut Chart 4</div>
				</div>
			</div>
			{/* Page Content End */}
		</div>
	);
}
