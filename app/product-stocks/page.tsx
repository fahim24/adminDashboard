import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Product Stocks",
};

export default function ProductStock() {
	return (
		// product Stock Page Start
		<div className="space-y-5">
			{/* Page Heading Start*/}
			<h1 className="text-3xl text-CDark font-bold">Product Stocks</h1>
		</div>
	);
}
