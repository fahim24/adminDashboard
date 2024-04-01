// Import from react
import React from "react";
// Import from next
import { Metadata } from "next";
import SettingsForm from "@/modules/forms/SettingsForm";

// Title and Metadata for the Settings Page
export const metadata: Metadata = {
	title: "Settings",
};

export default function SettingsPage() {
	return (
		// Settings Page Start
		<div className="space-y-5 mb-10">
			{/* Page Heading Start */}
			<p className="text-3xl text-CDark font-bold">General Settings</p>
			{/* Page Content Start */}
			<SettingsForm />
			{/* Page Content End */}
		</div>
	);
}
