// import from react
import React from "react";
// import from next
import { Metadata } from "next";
// import from antd
import { Card, Input, Rate } from "antd";
// import from react-icons
import { CiSearch } from "react-icons/ci";
import { MdDelete, MdInfo, MdMoveToInbox } from "react-icons/md";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import StarredMail from "@/modules/components/StarredMail";

// Title and Metadata for the Inbox Page
export const metadata: Metadata = {
	title: "Starred | Inbox",
};

export default function InboxStarred() {
	const starredMails = [
		{
			key: "mail1",
			name: "Jullu Jalal",
			description: "Our Bachelor of Commerce program is ACBSP-accredited.",
			time: "8:38 AM",
		},
		{
			key: "mail2",
			name: "Minerva Barnett",
			description: "Get Best Advertiser In Your Side Pocket",
			time: "8:13 AM",
		},
		{
			key: "mail3",
			name: "Peter Lewis",
			description: "Vacation Home Rental Success",
			time: "7:52 PM",
		},
		{
			key: "mail4",
			name: "Anthony Briggs",
			description: "Free Classifieds Using Them To Promote Your Stuff Online",
			time: "7:52 PM",
		},
		{
			key: "mail5",
			name: "Clifford Morgan",
			description: "Enhance Your Brand Potential With Giant Advertising Blimps",
			time: "4:13 PM",
		},
		{
			key: "mail6",
			name: "Cecilia Webster",
			description: "Always Look On The Bright Side Of Life",
			time: "3:52 PM",
		},
		{
			key: "mail7",
			name: "Harvey Manning",
			description: "Curling Irons Are As Individual As The Women Who Use Them",
			time: "2:30 PM",
		},
		{
			key: "mail8",
			name: "Willie Blake",
			description: "Our Bachelor of Commerce program is ACBSP-accredited.",
			time: "8:38 AM",
		},
		{
			key: "mail9",
			name: "Minerva Barnett",
			description: "Get Best Advertiser In Your Side Pocket",
			time: "8:13 AM",
		},
		{
			key: "mail10",
			name: "Fanny Weaver",
			description: "Free Classifieds Using Them To Promote Your Stuff Online",
			time: "7:52 PM",
		},
		{
			key: "mail11",
			name: "Olga Hogan",
			description: "Enhance Your Brand Potential With Giant Advertising Blimps",
			time: "4:13 PM",
		},
		{
			key: "mail12",
			name: "Lora Houston",
			description: "Vacation Home Rental Success",
			time: "7:52 PM",
		},
	];
	return (
		// Starred Inbox Page Start
		<div className="space-y-5">
			{/* Content Start */}
			<div className="bg-white border rounded-lg">
				{/* Search Bar and Filter Buttons Start */}
				<div className="flex items-center justify-between p-5">
					<Input
						placeholder="Search mail"
						className="bg-CBG rounded-full w-80"
						prefix={<CiSearch />}
					/>
					<div className="bg-CBG rounded-lg divide-x border">
						<button className="p-2 hover:bg-CLight hover:bg-opacity-20">
							<MdMoveToInbox />
						</button>
						<button className="p-2 hover:bg-CLight hover:bg-opacity-20">
							<MdInfo />
						</button>
						<button className="p-2 hover:bg-CLight hover:bg-opacity-20">
							<MdDelete />
						</button>
					</div>
				</div>
				{/* Mails Start */}
				<div className="divide-y mt-5">
					{starredMails.map((mail) => (
						// eslint-disable-next-line react/jsx-key
						<StarredMail {...mail} />
					))}
				</div>
			</div>
			{/* Pagination Start */}
			<div className="flex items-center justify-between">
				<p className="font-semibold text-CLight">Showing 1-12 of 245</p>
				<div className="bg-white rounded-lg divide-x border">
					<button className="py-3 px-5 hover:bg-CLight hover:bg-opacity-20">
						<FaAngleLeft />
					</button>
					<button className="py-3 px-5 hover:bg-CLight hover:bg-opacity-20">
						<FaAngleRight />
					</button>
				</div>
			</div>
		</div>
	);
}
