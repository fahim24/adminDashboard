"use client";
import React, { useContext, useEffect, useState } from "react";
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
import { usePathname } from "next/navigation";

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
	getItem(<Link href="/dashboard">Dashboard</Link>, "/dashboard", <RiDashboard3Line />),
	getItem(
		<Link href="/dashboard/products">Products</Link>,
		"/dashboard/products",
		<RiLayoutGridLine />
	),
	getItem(
		<Link href="/dashboard/favorites">Favorites</Link>,
		"/dashboard/favorites",
		<RiHeartLine />
	),
	getItem(<Link href="/dashboard/inbox">Inbox</Link>, "/dashboard/inbox", <PiChats />),
	getItem(
		<Link href="/dashboard/order-lists">Order List</Link>,
		"/dashboard/order-lists",
		<PiListChecks />
	),
	getItem(
		<Link href="/dashboard/product-stocks">Product Stock</Link>,
		"/dashboard/product-stocks",
		<MdOutlineTableRows />
	),
	{ type: "divider" },
	getItem(
		"PAGES",
		"grp",
		null,
		[
			getItem(<Link href="/pricing">Pricing</Link>, "/pricing", <LiaGiftSolid />),
			getItem(<Link href="/calendar">Calendar</Link>, "/calendar", <LiaCalendarSolid />),
			getItem(<Link href="/to-do">To-Do</Link>, "/to-do", <LiaClipboard />),
			getItem(<Link href="/contacts">Contact</Link>, "/contacts", <LiaUserFriendsSolid />),
			getItem(<Link href="/invoices">Invoice</Link>, "/invoices", <PiMoneyBold />),
			getItem(<Link href="/ui-elements">UI Elements</Link>, "/ui-elements", <LiaChartBarSolid />),
			getItem(<Link href="/team">Team</Link>, "/team", <LiaUser />),
			getItem(<Link href="/tables">Table</Link>, "/tables", <PiGridNine />),
		],
		"group"
	),
	{ type: "divider" },
	getItem(<Link href="/settings">Settings</Link>, "/settings", <RiSettings3Line />),
	getItem(<Link href="/logout">Logout</Link>, "/logout", <PiPower />),
];

const Sidenav: React.FC = () => {
	const { collapsed } = useMenuToggleContext();
	const pathName = usePathname();
	const [currentPath, setCurrentPath] = useState<string>(pathName);
	useEffect(() => {
		// console.log(pathName);
		if (pathName.startsWith("/dashboard/inbox/")) {
			setCurrentPath("/dashboard/inbox");
		} else if (pathName.startsWith("/contacts/")) {
			setCurrentPath("/contacts");
		} else setCurrentPath(pathName);
	}, [pathName]);

	return (
		<div id="sideMenu" className="bg-white sticky top-0 h-screen  ">
			<Link href="/">
				<div className="px-5 py-2.5 sticky top-0 bg-white z-50 h-[60px] flex justify-center items-center">
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
				className="p-5 overflow-y-auto h-[calc(100%-60px)]"
				selectedKeys={[currentPath]}
				mode="inline"
				inlineCollapsed={collapsed}
				items={items}
			/>
		</div>
	);
};

export default Sidenav;
