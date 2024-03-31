import React from "react";
import { Metadata } from "next";
import { ImFilter } from "react-icons/im";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import DatePickerButton from "@/modules/buttons/DatePicker";
import OrderTypePicker from "@/modules/buttons/OrderTypePicker";
import OrderStatusPicker from "@/modules/buttons/OrderStatusPicker";
import ResetFilter from "@/modules/buttons/ResetFilter";
import OrderItem, {
	StatusCompleted,
	StatusProcessing,
	StatusRejected,
	StatusOnHold,
	StatusInTransit,
} from "@/modules/components/OrderItem";

export const metadata: Metadata = {
	title: "Order Lists",
};

export default function OrderList() {
	const orderItems = [
		{
			id: "00001",
			name: "Christine Brooks",
			address: "089 Kutch Green Apt. 448",
			date: "04 Sep 2019",
			type: "Electric",
			status: <StatusCompleted />,
		},
		{
			id: "00002",
			name: "Rosie Pearson",
			address: "979 Immanuel Ferry Suite 526",
			date: "28 May 2019",
			type: "Book",
			status: <StatusProcessing />,
		},
		{
			id: "00003",
			name: "Darrell Caldwell",
			address: "8587 Frida Ports",
			date: "23 Nov 2019",
			type: "Medicine",
			status: <StatusRejected />,
		},
		{
			id: "00004",
			name: "Gilbert Johnston",
			address: "768 Destiny Lake Suite 600",
			date: "05 Feb 2019",
			type: "Mobile",
			status: <StatusCompleted />,
		},
		{
			id: "00005",
			name: "Alan Cain",
			address: "042 Mylene Throughway",
			date: "29 Jul 2019",
			type: "Watch",
			status: <StatusProcessing />,
		},
		{
			id: "00006",
			name: "Alfred Murray",
			address: "543 Weimann Mountain",
			date: "15 Aug 2019",
			type: "Medicine",
			status: <StatusCompleted />,
		},
		{
			id: "00007",
			name: "Maggie Sullivan",
			address: "New Scottieberg",
			date: "21 Dec 2019",
			type: "Watch",
			status: <StatusProcessing />,
		},
		{
			id: "00008",
			name: "Rosie Todd",
			address: "New Jon",
			date: "30 Apr 2019",
			type: "Medicine",
			status: <StatusOnHold />,
		},
		{
			id: "00009",
			name: "Dollie Hines",
			address: "124 Lyla Forge Suite 975",
			date: "09 Jan 2019",
			type: "Book",
			status: <StatusInTransit />,
		},
	];
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
						{orderItems.map((item) => (
							<OrderItem key={item.id} {...item} />
						))}
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
