import React from "react";
import { Metadata } from "next";
import { ImFilter } from "react-icons/im";
import { FaAngleDown, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import DatePickerButton from "@/modules/buttons/DatePicker";
import OrderTypePicker from "@/modules/buttons/OrderTypePicker";
import OrderStatusPicker from "@/modules/buttons/OrderStatusPicker";
import Link from "next/link";
import ResetFilter from "@/modules/buttons/ResetFilter";

export const metadata: Metadata = {
	title: "Order Lists",
};

export default function OrderList() {
	return (
		// Order List Page Start
		<div className="space-y-5">
			{/* Page Heading Start*/}
			<h1 className="text-3xl text-CDark font-bold">Order Lists</h1>
			{/* Filter Bar Start */}
			<div className="bg-white flex border rounded-xl w-fit divide-x text-sm font-semibold">
				<div className="p-2.5 hover:bg-CBG flex items-center justify-center">
					<ImFilter />
				</div>
				<div className="p-2.5 hover:bg-CBG flex items-center justify-center">Filter By</div>

				<DatePickerButton />
				<OrderTypePicker />
				<OrderStatusPicker />
				<ResetFilter />
			</div>
			{/* Order List Start */}
			<div className="bg-white border rounded-2xl">
				<table className="table-auto w-full  ">
					<thead>
						<tr className="text-left border-b">
							<th className="px-5 py-2.5">ID</th>
							<th>NAME</th>
							<th>ADDRESS</th>
							<th>DATE</th>
							<th>TYPE</th>
							<th>STATUS</th>
						</tr>
					</thead>
					<tbody className="divide-y text-sm">
						{/* Order List Item 1 */}
						<tr className="font-semibold hover:bg-gray-100 ">
							<td className="flex items-center gap-1 p-5 cursor-pointer">00001</td>
							<td>Christine Brooks</td>
							<td>089 Kutch Green Apt. 448</td>
							<td>04 Sep 2019</td>
							<td>Electric</td>
							<td>
								<span className="bg-CGreen bg-opacity-20 text-CGreen rounded-lg w-24 h-7 flex items-center justify-center shrink-0 text-xs">
									Completed
								</span>
							</td>
						</tr>
						{/* Order List Item 2 */}
						<tr className="font-semibold hover:bg-gray-100 ">
							<td className="flex items-center gap-1 p-5 cursor-pointer">00002</td>
							<td>Rosie Pearson</td>
							<td>979 Immanuel Ferry Suite 526</td>
							<td>28 May 2019</td>
							<td>Book</td>
							<td>
								<span className="bg-CPurple bg-opacity-20 text-CPurple rounded-lg w-24 h-7 flex items-center justify-center shrink-0 text-xs">
									Processing
								</span>
							</td>
						</tr>
						{/* Order List Item 3 */}
						<tr className="font-semibold hover:bg-gray-100 ">
							<td className="flex items-center gap-1 p-5 cursor-pointer">00003</td>
							<td>Darrell Caldwell</td>
							<td>8587 Frida Ports</td>
							<td>23 Nov 2019</td>
							<td>Medicine</td>
							<td>
								<span className="bg-CRed bg-opacity-20 text-CRed rounded-lg w-24 h-7 flex items-center justify-center shrink-0 text-xs">
									Rejected
								</span>
							</td>
						</tr>
						{/* Order List Item 4 */}
						<tr className="font-semibold hover:bg-gray-100 ">
							<td className="flex items-center gap-1 p-5 cursor-pointer">00004</td>
							<td>Gilbert Johnston</td>
							<td>768 Destiny Lake Suite 600</td>
							<td>05 Feb 2019</td>
							<td>Mobile</td>
							<td>
								<span className="bg-CGreen bg-opacity-20 text-CGreen rounded-lg w-24 h-7 flex items-center justify-center shrink-0 text-xs">
									Completed
								</span>
							</td>
						</tr>
						{/* Order List Item 5 */}
						<tr className="font-semibold hover:bg-gray-100 ">
							<td className="flex items-center gap-1 p-5 cursor-pointer">00005</td>
							<td>Alan Cain</td>
							<td>042 Mylene Throughway</td>
							<td>29 Jul 2019</td>
							<td>Watch</td>
							<td>
								<span className="bg-CPurple bg-opacity-20 text-CPurple rounded-lg w-24 h-7 flex items-center justify-center shrink-0 text-xs">
									Processing
								</span>
							</td>
						</tr>
						{/* Order List Item 6 */}
						<tr className="font-semibold hover:bg-gray-100 ">
							<td className="flex items-center gap-1 p-5 cursor-pointer">00006</td>
							<td>Alfred Murray</td>
							<td>543 Weimann Mountain</td>
							<td>15 Aug 2019</td>
							<td>Medicine</td>
							<td>
								<span className="bg-CGreen bg-opacity-20 text-CGreen rounded-lg w-24 h-7 flex items-center justify-center shrink-0 text-xs">
									Completed
								</span>
							</td>
						</tr>
						{/* Order List Item 7 */}
						<tr className="font-semibold hover:bg-gray-100 ">
							<td className="flex items-center gap-1 p-5 cursor-pointer">00007</td>
							<td>Maggie Sullivan</td>
							<td>New Scottieberg</td>
							<td>21 Dec 2019</td>
							<td>Watch</td>
							<td>
								<span className="bg-CPurple bg-opacity-20 text-CPurple rounded-lg w-24 h-7 flex items-center justify-center shrink-0 text-xs">
									Processing
								</span>
							</td>
						</tr>
						{/* Order List Item 8 */}
						<tr className="font-semibold hover:bg-gray-100 ">
							<td className="flex items-center gap-1 p-5 cursor-pointer">00008</td>
							<td>Rosie Todd</td>
							<td>New Jon</td>
							<td>30 Apr 2019</td>
							<td>Medicine</td>
							<td>
								<span className="bg-COrange bg-opacity-20 text-COrange rounded-lg w-24 h-7 flex items-center justify-center shrink-0 text-xs">
									On Hold
								</span>
							</td>
						</tr>
						{/* Order List Item 9 */}
						<tr className="font-semibold hover:bg-gray-100 ">
							<td className="flex items-center gap-1 p-5 cursor-pointer">00009</td>
							<td>Dollie Hines</td>
							<td>124 Lyla Forge Suite 975</td>
							<td>09 Jan 2019</td>
							<td>Book</td>
							<td>
								<span className="bg-CPink bg-opacity-20 text-CPink rounded-lg w-24 h-7 flex items-center justify-center shrink-0 text-xs">
									In Transit
								</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			{/* Pagination Start */}
			<div className="flex items-center justify-between">
				<p className="font-semibold text-CLight">Showing 1-9 of 78</p>
				<div className="bg-white rounded-lg divide-x border">
					<button className="py-3 px-5 hover:bg-CLight hover:bg-opacity-20">
						<FaAngleLeft />
					</button>
					<button className="py-3 px-5 hover:bg-CLight hover:bg-opacity-20">
						<FaAngleRight />
					</button>
				</div>
			</div>
		</div>
	);
}
