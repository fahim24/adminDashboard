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
			<div className="bg-white rounded-xl p-5">
				<div className="grid grid-cols-3 gap-5 items-center px-10 mb-10">
					<div>
						<p className="font-semibold mb-3">Invoice From:</p>
						<p className="font-bold">Virginia Walker</p>
						<p className="text-CLight font-semibold">9694 Krajcik Locks Suite 635</p>
					</div>
					<div>
						<p className="font-semibold mb-3">Invoice To:</p>
						<p className="font-bold">Austin Miller</p>
						<p className="text-CLight font-semibold">Brookview</p>
					</div>
					<div>
						<p className="font-semibold">Invoice Date : 12 Nov 2019</p>
						<p className="font-semibold">Due Date : 25 Dec 2019</p>
					</div>
				</div>
				<table className="table-auto w-full  ">
					<thead>
						<tr className=" bg-CBG">
							<th className="px-5 py-2.5 rounded-tl-lg rounded-bl-lg">Serial No.</th>
							<th>Description</th>
							<th>Quantity</th>
							<th>Base Cost</th>
							<th className="rounded-tr-lg rounded-br-lg">Total Cost</th>
						</tr>
					</thead>
					<tbody className=" text-sm">
						{invoiceItems.map((item) => (
							<InvoiceItem key={item.id} {...item} />
						))}
					</tbody>
					<tfoot>
						<tr>
							<td className="font-bold p-5 pr-20  text-right colspan=5 " colSpan={5}>
								Total = $4640
							</td>
						</tr>
					</tfoot>
				</table>
				<div className="flex items-center justify-end  my-10 gap-4">
					<button className="p-3 border bg-CBG rounded-lg">
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
