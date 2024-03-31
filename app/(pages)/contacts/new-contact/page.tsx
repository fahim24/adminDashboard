// Import from react
import React from "react";
// Import from next
import { Metadata } from "next";
import NewContactForm from "@/modules/forms/NewContactForm";

// Title and Metadata for the Contacts Page
export const metadata: Metadata = {
	title: "Add New Contact",
};

export default function NewContactPage() {
	return (
		// Contacts Page Start
		<div className="space-y-5 mb-10">
			{/* Page Heading Start */}
			<p className="text-3xl text-CDark font-bold">Add New Contact</p>
			{/* Page Content Start */}
			<NewContactForm />
		</div>
		// Contacts Page End
	);
}
