import React, { useState } from "react";
import { Menu, MenuProps } from "antd";
import { RiDashboard3Line, RiHeartLine, RiLayoutGridLine, RiSettings3Line } from "react-icons/ri";
import { PiChats, PiGridNine, PiListChecks, PiMoneyBold, PiPower } from "react-icons/pi";
import { MdOutlineTableRows } from "react-icons/md";
import {
	LiaCalendarSolid,
	LiaChartBarSolid,
	LiaClipboard,
	LiaGiftSolid,
	LiaUser,
	LiaUserFriendsSolid,
} from "react-icons/lia";
import Link from "next/link";
import Image from "next/image";

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
	getItem(<Link href="/">Dashboard</Link>, "1", <RiDashboard3Line />),
	getItem(<Link href="/products">Products</Link>, "2", <RiLayoutGridLine />),
	getItem("Favorites", "3", <RiHeartLine />),
	getItem("Inbox", "4", <PiChats />),
	getItem("Order List", "5", <PiListChecks />),
	getItem("Product Stock", "6", <MdOutlineTableRows />),
	{ type: "divider" },
	getItem(
		"PAGES",
		"grp",
		null,
		[
			getItem("Pricing", "7", <LiaGiftSolid />),
			getItem("Calendar", "8", <LiaCalendarSolid />),
			getItem("To-Do", "9", <LiaClipboard />),
			getItem("Contact", "10", <LiaUserFriendsSolid />),
			getItem("Invoice", "11", <PiMoneyBold />),
			getItem("UI Elements", "12", <LiaChartBarSolid />),
			getItem("Team", "13", <LiaUser />),
			getItem("Table", "14", <PiGridNine />),
		],
		"group"
	),
	{ type: "divider" },
	getItem("Settings", "15", <RiSettings3Line />),
	getItem("Logout", "16", <PiPower />),
];

const Sidenav: React.FC = () => {
	return (
		<div className="bg-white sticky top-0 h-fit">
			<Link href="/">
				<Image className="px-10 pt-3 " src="/image/logo.png" width={600} height={125} alt="Logo" />
			</Link>
			<Menu
				className="px-5 mt-5"
				defaultSelectedKeys={["1"]}
				// mode="inline"
				// inlineCollapsed={collapsed}
				items={items}
			/>
		</div>
	);
};

export default Sidenav;
