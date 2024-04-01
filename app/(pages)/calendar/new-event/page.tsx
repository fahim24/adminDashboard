// Import from react
import React from "react";
// Import from next
import { Metadata } from "next";
import NewEventForm from "@/modules/forms/NewEventForm";

// Title and Metadata for the Contacts Page
export const metadata: Metadata = {
	title: "Add New Event",
};

export default function NewEventPage() {
	return (
		// Contacts Page Start
		<div className="space-y-5 mb-10">
			{/* Page Heading Start */}
			<p className="text-3xl text-CDark font-bold">Add New Event</p>
			{/* Page Content Start */}
			<NewEventForm />
		</div>
		// Contacts Page End
	);
}
