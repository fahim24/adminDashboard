// Import from react
import React from "react";
// Import from next
import { Metadata } from "next";
import ContactCard from "@/modules/components/ContactCard";
import Link from "next/link";

// Title and Metadata for the Contacts Page
export const metadata: Metadata = {
	title: "Contacts",
};

export default function ContactsPage() {
	const contacts = [
		{
			key: "contact1",
			img: "/image/contact1.png",
			name: "Jason Price",
			email: "kuhlman.jermey@yahoo.com",
		},
		{
			key: "contact2",
			img: "/image/contact2.png",
			name: "Duane Dean",
			email: "rusty.botsford@wilfrid.io",
		},
		{
			key: "contact3",
			img: "/image/contact3.png",
			name: "Jonathan Barker",
			email: "cora_haley@quinn.biz",
		},
		{
			key: "contact4",
			img: "/image/contact4.png",
			name: "Rosie Glover",
			email: "lockman.marques@hotmail.com",
		},
		{
			key: "contact5",
			img: "/image/contact5.png",
			name: "Patrick Greer",
			email: "pearlie.eichmann@trevion.net",
		},
		{
			key: "contact6",
			img: "/image/contact6.png",
			name: "Darrell Ortega",
			email: "chaya.shields@ferry.info",
		},
	];
	return (
		// Contacts Page Start
		<div className="space-y-5 mb-10">
			{/* Page Heading Start */}
			<div className="flex justify-between items-center mb-10">
				<p className="text-3xl text-CDark font-bold">Contact</p>
				<Link href="/contacts/new-contact">
					<button className="bg-CBlue text-white px-5 py-2.5 rounded text-sm">
						Add New Contact
					</button>
				</Link>
			</div>
			{/* Page Content Start */}
			<div className="grid grid-cols-3 gap-5">
				{contacts.map((contact) => (
					// eslint-disable-next-line react/jsx-key
					<ContactCard {...contact} />
				))}
			</div>

			{/* Page Content End */}
		</div>
	);
}
