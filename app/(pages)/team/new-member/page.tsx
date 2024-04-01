// Import from react
import React from "react";
// Import from next
import { Metadata } from "next";
import NewMemberForm from "@/modules/forms/NewMemberForm";

// Title and Metadata for the Members Page
export const metadata: Metadata = {
	title: "Add New Member",
};

export default function NewMemberPage() {
	return (
		// Members Page Start
		<div className="space-y-5 mb-10">
			{/* Page Heading Start */}
			<p className="text-3xl text-CDark font-bold">Add New Member</p>
			{/* Page Content Start */}
			<NewMemberForm />
		</div>
		// Members Page End
	);
}
