import React from "react";
import { Metadata } from "next";
import { Card } from "antd";

export const metadata: Metadata = {
	title: "Inbox",
};

export default function Inbox() {
	return (
		// Inbox Page Start
		<Card className="w-full">Inbox</Card>
	);
}
