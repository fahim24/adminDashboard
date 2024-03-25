import React from "react";
import { Menu, MenuProps } from "antd";
import { PiMoneyBold } from "react-icons/pi";
import { LiaChartBarSolid, LiaClipboard, LiaUserFriendsSolid } from "react-icons/lia";
import Link from "next/link";
import { FaPlus, FaRegEnvelope, FaRegPaperPlane, FaRegSquare, FaRegStar } from "react-icons/fa";
import { SlPencil } from "react-icons/sl";
import { BsExclamationTriangle } from "react-icons/bs";
import { RiChatSettingsLine, RiDeleteBinLine } from "react-icons/ri";

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
				<Link href="/inbox">
					<span>Inbox</span> <span className="float-right">1253</span>
				</Link>,
				"1",
				<FaRegEnvelope />
			),
			getItem(
				<Link href="/inbox/starred">
					<span>Starred</span> <span className="float-right">245</span>
				</Link>,
				"2",
				<FaRegStar />
			),
			getItem(
				<Link href="/inbox/sent">
					<span>Sent</span> <span className="float-right">24,532</span>
				</Link>,
				"3",
				<FaRegPaperPlane />
			),
			getItem(
				<Link href="/inbox/drafts">
					<span>Draft</span> <span className="float-right">9</span>
				</Link>,
				"4",
				<SlPencil />
			),
			getItem(
				<Link href="inbox/spam">
					<span>Spam</span> <span className="float-right">14</span>
				</Link>,
				"5",
				<BsExclamationTriangle />
			),
			getItem(
				<Link href="/inbox/important">
					<span>Important</span> <span className="float-right">18</span>
				</Link>,
				"6",
				<RiChatSettingsLine />
			),
			getItem(
				<Link href="/inbox/trash">
					<span>Bin</span> <span className="float-right">9</span>
				</Link>,
				"7",
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
				<Link href="/inbox/label/primary">Primary</Link>,
				"8",
				<FaRegSquare style={{ color: "rgb(0, 182, 155)" }} />
			),
			getItem(
				<Link href="/inbox/label/social">Social</Link>,
				"9",
				<FaRegSquare style={{ color: "rgb(72, 128, 255)" }} />
			),
			getItem(
				<Link href="/inbox/label/work">Work</Link>,
				"10",
				<FaRegSquare style={{ color: "rgb(255, 135, 67)" }} />
			),
			getItem(
				<Link href="/inbox/label/friends">Friends</Link>,
				"11",
				<FaRegSquare style={{ color: "rgb(158, 143, 255)" }} />
			),
			getItem("Create New Label", "12", <FaPlus />),
		],
		"group"
	),
];

const InboxMenu: React.FC = () => {
	return (
		<div id="inboxMenu" className="bg-white pt-5 rounded-lg">
			<button className="bg-CBlue text-white flex gap-2 items-center justify-center rounded-lg mx-auto  py-2 w-4/5">
				<FaPlus />
				Compose
			</button>
			<Menu
				className="p-5 rounded-2xl w-64"
				defaultSelectedKeys={["1"]}
				mode="vertical"
				items={items}
			/>
		</div>
	);
};

export default InboxMenu;
