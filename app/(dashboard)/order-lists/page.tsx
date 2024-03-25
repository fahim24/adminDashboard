import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Order Lists",
};

export default function OrderList() {
	return (
		// Order List Page Start
		<div className="space-y-5">
			{/* Page Heading Start*/}
			<h1 className="text-3xl text-CDark font-bold">Order Lists</h1>
		</div>
	);
}
