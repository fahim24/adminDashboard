// Import from react
import React from "react";
// Import from next
import { Metadata } from "next";
import TeamMemberCard from "@/modules/components/TeamMemberCard";
import Link from "next/link";

// Title and Metadata for the Team Page
export const metadata: Metadata = {
	title: "Team",
};

export default function TeamPage() {
	const teamMembers = [
		{
			key: "member1",
			img: "/image/member1.png",
			name: "Jason Price",
			designation: "Admin",
			email: "janick_parisian@yahoo.com",
		},
		{
			key: "member2",
			img: "/image/member2.png",
			name: "Jukkoe Sisao",
			designation: "CEO",
			email: "sibyl_kozey@gmail.com",
		},
		{
			key: "member3",
			img: "/image/member3.png",
			name: "Harriet King",
			designation: "CTO",
			email: "nadia_block@hotmail.com",
		},
		{
			key: "member4",
			img: "/image/member4.png",
			name: "Lenora Benson",
			designation: "Lead",
			email: "feil.wallace@kunde.us",
		},
		{
			key: "member5",
			img: "/image/member5.png",
			name: "Olivia Reese",
			designation: "Strategist",
			email: "kemmer.hattie@cremin.us",
		},
		{
			key: "member6",
			img: "/image/member6.png",
			name: "Bertha Valdez",
			designation: "CEO",
			email: "loraine.koelpin@tromp.io",
		},
		{
			key: "member7",
			img: "/image/member7.png",
			name: "Harriett Payne",
			designation: "Digital Marketer",
			email: "nannie_west@estrella.tv",
		},
		{
			key: "member8",
			img: "/image/member8.png",
			name: "George Bryant",
			designation: "Social Media",
			email: "delmer.kling@gmail.com",
		},
		{
			key: "member9",
			img: "/image/member9.png",
			name: "Lily French",
			designation: "Strategist",
			email: "lucienne.herman@hotmail.com",
		},
		{
			key: "member10",
			img: "/image/member10.png",
			name: "Howard Adkins",
			designation: "CEO",
			email: "wiegand.leonor@herman.us",
		},
		{
			key: "member11",
			img: "/image/member7.png",
			name: "Earl Bowman",
			designation: "Digital Marketer",
			email: "waino_altenwerth@nicolette.tv",
		},
		{
			key: "member12",
			img: "/image/member12.png",
			name: "Patrick Padilla",
			designation: "Social Media",
			email: "octavia.nienow@gleichner.net",
		},
	];
	return (
		// Team Page Start
		<div className="space-y-5 mb-10">
			{/* Page Heading Start */}
			<div className="flex justify-between items-center mb-10">
				<p className="text-3xl text-CDark font-bold">Team</p>
				<Link href="/team/new-member">
					<button className="btn text-sm">Add New Member</button>
				</Link>
			</div>
			{/* Page Content Start */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
				{teamMembers.map((member) => (
					// eslint-disable-next-line react/jsx-key
					<TeamMemberCard {...member} />
				))}
			</div>
			{/* Page Content End */}
		</div>
	);
}
