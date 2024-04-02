//
import React from "react";
//
import { Metadata } from "next";
//
import { ImFilter } from "react-icons/im";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
//
import DatePickerButton from "@/modules/buttons/DatePicker";
import OrderTypePicker from "@/modules/buttons/OrderTypePicker";
import OrderStatusPicker from "@/modules/buttons/OrderStatusPicker";
import ResetFilter from "@/modules/buttons/ResetFilter";
import OrderListItems from "@/modules/components/OrderListItems";

// Metadata for the page
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
			<div className="bg-white flex flex-col md:flex-row border rounded-xl w-fit divide-y md:divide-x text-sm font-semibold mx-auto md:mx-0">
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
			<div className="grid grid-cols-1">
				<OrderListItems />
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
