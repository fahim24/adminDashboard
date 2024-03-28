// Import from react
import React from "react";
// Import from next
import { Metadata } from "next";

// Title and Metadata for the Invoice Page
export const metadata: Metadata = {
	title: "Invoice",
};

export default function InvoicePage() {
	return (
		// Invoice Page Start
		<div className="space-y-5 mb-10">
			{/* Page Heading Start */}
			<p className="text-3xl text-CDark font-bold">Invoice</p>
			{/* Page Content Start */}

			{/* Page Content End */}
		</div>
	);
}
