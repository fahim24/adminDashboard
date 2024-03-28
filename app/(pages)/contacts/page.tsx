// Import from react
import React from "react";
// Import from next
import { Metadata } from "next";

// Title and Metadata for the Contacts Page
export const metadata: Metadata = {
	title: "Contacts",
};

export default function ContactsPage() {
	return (
		// Contacts Page Start
		<div className="space-y-5 mb-10">
			{/* Page Heading Start */}
			<p className="text-3xl text-CDark font-bold">Contacts</p>
			{/* Page Content Start */}

			{/* Page Content End */}
		</div>
	);
}
