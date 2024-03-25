"use client";
import React, { useContext } from "react";
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
import { useMenuToggleContext } from "@/modules/Contexts/MenuToggleContext";

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
	getItem(<Link href="/dashboard">Dashboard</Link>, "1", <RiDashboard3Line />),
	getItem(<Link href="/dashboard/products">Products</Link>, "2", <RiLayoutGridLine />),
	getItem(<Link href="/dashboard/favorites">Favorites</Link>, "3", <RiHeartLine />),
	getItem(<Link href="/dashboard/inbox">Inbox</Link>, "4", <PiChats />),
	getItem(<Link href="/dashboard/order-lists">Order List</Link>, "5", <PiListChecks />),
	getItem(<Link href="/dashboard/product-stocks">Product Stock</Link>, "6", <MdOutlineTableRows />),
	{ type: "divider" },
	getItem(
		"PAGES",
		"grp",
		null,
		[
			getItem(<Link href="/dashboard/pricing">Pricing</Link>, "7", <LiaGiftSolid />),
			getItem(<Link href="/dashboard/calendar">Calendar</Link>, "8", <LiaCalendarSolid />),
			getItem(<Link href="/dashboard/to-do">To-Do</Link>, "9", <LiaClipboard />),
			getItem(<Link href="/dashboard/contacts">Contact</Link>, "10", <LiaUserFriendsSolid />),
			getItem(<Link href="/dashboard/invoices">Invoice</Link>, "11", <PiMoneyBold />),
			getItem(<Link href="/dashboard/ui-elements">UI Elements</Link>, "12", <LiaChartBarSolid />),
			getItem(<Link href="/dashboard/team">Team</Link>, "13", <LiaUser />),
			getItem(<Link href="/dashboard/tables">Table</Link>, "14", <PiGridNine />),
		],
		"group"
	),
	{ type: "divider" },
	getItem(<Link href="/dashboard/settings">Settings</Link>, "15", <RiSettings3Line />),
	getItem(<Link href="/logout">Logout</Link>, "16", <PiPower />),
];

const Sidenav: React.FC = () => {
	const { collapsed } = useMenuToggleContext();
	return (
		<div id="sideMenu" className="bg-white overflow-y-scroll sticky top-0 h-screen">
			<Link href="/">
				<div className="p-5">
					{collapsed ? (
						<div className="w-10">
							<Image src="/image/logo.png" width={600} height={125} alt="Logo" />
						</div>
					) : (
						<div className="w-40">
							<Image src="/image/logo.png" width={600} height={125} alt="Logo" />
						</div>
					)}
				</div>
			</Link>
			<Menu
				className="px-5"
				defaultSelectedKeys={["1"]}
				mode="inline"
				inlineCollapsed={collapsed}
				items={items}
			/>
		</div>
	);
};

export default Sidenav;
