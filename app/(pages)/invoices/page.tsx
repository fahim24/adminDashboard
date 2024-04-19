// Import from react
import React from "react";
// Import from next
import { Metadata } from "next";
import InvoiceItem from "@/modules/components/InvoiceItem";
import { MdPrint } from "react-icons/md";
import { BsCursor } from "react-icons/bs";

// Title and Metadata for the Invoice Page
export const metadata: Metadata = {
	title: "Invoice",
};

export default function InvoicePage() {
	const invoiceItems = [
		{
			id: 1,
			description: "Children Toy",
			quantity: 2,
			baseCost: 20,
			totalCost: 40,
		},
		{
			id: 2,
			description: "Makeup",
			quantity: 2,
			baseCost: 50,
			totalCost: 100,
		},
		{
			id: 3,
			description: "Asus Laptop",
			quantity: 5,
			baseCost: 100,
			totalCost: 500,
		},
		{
			id: 4,
			description: "Iphone X",
			quantity: 4,
			baseCost: 1000,
			totalCost: 4000,
		},
	];
	return (
		// Invoice Page Start
		<div className="space-y-5 mb-10">
			{/* Page Heading Start */}
			<p className="text-3xl text-CDark font-bold">Invoice</p>
			{/* Page Content Start */}
			<div className="bg-white rounded-xl p-5  grid grid-cols-1">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center px-10 mb-10 w-full">
					<div className=" px-5">
						<p className="font-semibold mb-3">Invoice From:</p>
						<p className="font-bold whitespace-nowrap">Virginia Walker</p>
						<p className="text-CLight font-semibold">9694 Krajcik Locks Suite 635</p>
					</div>
					<div className=" px-5">
						<p className="font-semibold mb-3">Invoice To:</p>
						<p className="font-bold whitespace-nowrap">Austin Miller</p>
						<p className="text-CLight font-semibold">Brookview</p>
					</div>
					<div className=" px-5">
						<p className="font-semibold whitespace-nowrap">Invoice Date : 12 Nov 2019</p>
						<p className="font-semibold whitespace-nowrap">Due Date : 25 Dec 2019</p>
					</div>
				</div>
				<div className="overflow-x-auto scrollbar">
					<table className="w-full text-center text-CDark font-semibold whitespace-nowrap">
						<thead className="font-bold bg-CBG rounded-xl">
							<tr>
								<th className="px-5 py-3">Serial No.</th>
								<th className="px-5 py-3">Description</th>
								<th className="px-5 py-3">Quantity</th>
								<th className="px-5 py-3">Base Cost</th>
								<th className="px-5 py-3">Total Cost</th>
							</tr>
						</thead>
						<tbody className="divide-y text-sm">
							{invoiceItems.map((item) => (
								<InvoiceItem key={item.id} {...item} />
							))}
						</tbody>
						<tfoot className="font-bold border-t">
							<tr>
								<td className="p-5 text-right" colSpan={3}>
									Total
								</td>
								<td className="p-5">=</td>
								<td className="p-5">$4640</td>
							</tr>
						</tfoot>
					</table>
				</div>
				<div className="flex items-center justify-end  my-10 gap-4">
					<button className="p-3 border bg-CBG rounded-lg hover:bg-gray-200">
						<MdPrint />
					</button>
					<button className="p-2 bg-CBlue rounded-lg text-white font-semibold flex items-center">
						<span className="w-24">Send</span>
						<BsCursor className="size-7 p-2 bg-white bg-opacity-20 rounded " />
					</button>
				</div>
			</div>
			{/* Page Content End */}
		</div>
	);
}
