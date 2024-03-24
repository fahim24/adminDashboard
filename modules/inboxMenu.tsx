import React from "react";
import { Menu, MenuProps } from "antd";
import { PiGridNine, PiMoneyBold } from "react-icons/pi";
import {
	LiaCalendarSolid,
	LiaChartBarSolid,
	LiaClipboard,
	LiaGiftSolid,
	LiaUser,
	LiaUserFriendsSolid,
} from "react-icons/lia";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: "group"
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		type,
	} as MenuItem;
}

const items: MenuItem[] = [
	getItem(
		<span className="bg-CBlue text-white flex gap-2 items-center w-full rounded-lg px-5">
			<FaPlus />
			Compose
		</span>,
		"1"
	),
	getItem(
		"My Email",
		"Emailgrp",
		null,
		[
			getItem("Inbox", "2", <LiaGiftSolid />),
			getItem("Starred", "3", <LiaCalendarSolid />),
			getItem("Sent", "4", <LiaClipboard />),
			getItem("Draft", "5", <LiaUserFriendsSolid />),
			getItem("Spam", "6", <PiMoneyBold />),
			getItem("Important", "7", <LiaChartBarSolid />),
			getItem("Bin", "8", <LiaUser />),
		],
		"group"
	),
	getItem(
		"Label",
		"Labelgrp",
		null,
		[
			getItem("Primary", "9", <LiaClipboard />),
			getItem("Social", "10", <LiaUserFriendsSolid />),
			getItem("Work", "11", <PiMoneyBold />),
			getItem("friends", "12", <LiaChartBarSolid />),
		],
		"group"
	),
];

const InboxMenu: React.FC = () => {
	return (
		<div id="inbox-menu">
			<Menu className="p-5 rounded-2xl" defaultSelectedKeys={["2"]} mode="inline" items={items} />
		</div>
	);
};

export default InboxMenu;
