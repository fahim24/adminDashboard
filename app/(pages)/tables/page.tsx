// Import from react
import React from "react";
// Import from next
import { Metadata } from "next";
import OrderListItems from "@/modules/components/OrderListItems";
import ProductStockItems from "@/modules/components/ProductStockItems";
import { Divider } from "antd";

// Title and Metadata for the Table Page
export const metadata: Metadata = {
	title: "Table",
};

export default function TablePage() {
	return (
		// Table Page Start
		<div className="space-y-5 mb-10">
			{/* Page Heading Start */}
			<p className="text-3xl text-CDark font-bold">Table</p>
			<Divider style={{ borderWidth: 2 }} />
			{/* Page Content Start */}
			<div className="grid grid-cols-1">
				<OrderListItems />
			</div>
			<Divider style={{ borderWidth: 2 }} />
			<div className="grid grid-cols-1">
				<ProductStockItems />
			</div>
			{/* Page Content End */}
		</div>
	);
}
