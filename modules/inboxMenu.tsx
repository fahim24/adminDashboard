"use client";
import React, { useEffect, useState } from "react";
import { Menu, MenuProps } from "antd";
import Link from "next/link";
import { FaPlus, FaRegEnvelope, FaRegPaperPlane, FaRegSquare, FaRegStar } from "react-icons/fa";
import { SlPencil } from "react-icons/sl";
import { BsExclamationTriangle } from "react-icons/bs";
import { RiChatSettingsLine, RiDeleteBinLine } from "react-icons/ri";
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
	getItem(
		"My Email",
		"Emailgrp",
		null,
		[
			getItem(
				<Link href="/dashboard/inbox">
					<span>Inbox</span> <span className="float-right">1253</span>
				</Link>,
				"/dashboard/inbox",
				<FaRegEnvelope />
			),
			getItem(
				<Link href="/dashboard/inbox/starred">
					<span>Starred</span> <span className="float-right">245</span>
				</Link>,
				"/dashboard/inbox/starred",
				<FaRegStar />
			),
			getItem(
				<Link href="/dashboard/inbox/sent">
					<span>Sent</span> <span className="float-right">24,532</span>
				</Link>,
				"/dashboard/inbox/sent",
				<FaRegPaperPlane />
			),
			getItem(
				<Link href="/dashboard/inbox/drafts">
					<span>Draft</span> <span className="float-right">9</span>
				</Link>,
				"/dashboard/inbox/drafts",
				<SlPencil />
			),
			getItem(
				<Link href="/dashboard/inbox/spam">
					<span>Spam</span> <span className="float-right">14</span>
				</Link>,
				"/dashboard/inbox/spam",
				<BsExclamationTriangle />
			),
			getItem(
				<Link href="/dashboard/inbox/important">
					<span>Important</span> <span className="float-right">18</span>
				</Link>,
				"/dashboard/inbox/important",
				<RiChatSettingsLine />
			),
			getItem(
				<Link href="/dashboard/inbox/bin">
					<span>Bin</span> <span className="float-right">9</span>
				</Link>,
				"/dashboard/inbox/bin",
				<RiDeleteBinLine />
			),
		],
		"group"
	),
	getItem(
		"Label",
		"Labelgrp",
		null,
		[
			getItem(
				<Link href="/dashboard/inbox/label/primary">Primary</Link>,
				"/dashboard/inbox/label/primary",
				<FaRegSquare style={{ color: "rgb(0, 182, 155)" }} />
			),
			getItem(
				<Link href="/dashboard/inbox/label/social">Social</Link>,
				"/dashboard/inbox/label/social",
				<FaRegSquare style={{ color: "rgb(72, 128, 255)" }} />
			),
			getItem(
				<Link href="/dashboard/inbox/label/work">Work</Link>,
				"/dashboard/inbox/label/work",
				<FaRegSquare style={{ color: "rgb(255, 135, 67)" }} />
			),
			getItem(
				<Link href="/dashboard/inbox/label/friends">Friends</Link>,
				"/dashboard/inbox/label/friends",
				<FaRegSquare style={{ color: "rgb(158, 143, 255)" }} />
			),
			getItem("Create New Label", "12", <FaPlus />),
		],
		"group"
	),
];

const InboxMenu: React.FC = () => {
	const pathName = usePathname();
	const [currentPath, setCurrentPath] = useState<string>(pathName);
	useEffect(() => {
		// console.log(pathName, " im");
		if (pathName === "/dashboard/inbox/message") {
			setCurrentPath("/dashboard/inbox");
		} else {
			setCurrentPath(pathName);
		}
	}, [pathName]);
	return (
		<div id="inboxMenu" className="bg-white pt-5 rounded-lg">
			<button className="bg-CBlue text-white flex gap-2 items-center justify-center rounded-lg mx-auto  py-2 w-4/5">
				<FaPlus />
				Compose
			</button>
			<Menu
				className="p-5 rounded-2xl w-full lg:w-64"
				selectedKeys={[currentPath]}
				mode="vertical"
				items={items}
			/>
		</div>
	);
};

export default InboxMenu;
