"use client";
import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { useMenuToggleContext } from "@/modules/Contexts/MenuToggleContext";
import { Drawer } from "antd";
import Sidenav from "@/modules/sidenav";

const ToggleButton: React.FC = () => {
	const { collapsed, setCollapsed } = useMenuToggleContext();
	const [open, setOpen] = useState(false);

	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};
	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

	return (
		// <button>
		<div>
			<button className="block md:hidden" onClick={showDrawer}>
				<RiMenuFill className="text-2xl" />
			</button>
			<button onClick={toggleCollapsed} className="hidden md:block">
				<RiMenuFill className="text-2xl" />
			</button>
			<Drawer
				placement="left"
				closable={false}
				onClose={onClose}
				onClick={onClose}
				open={open}
				width="240px"
				className="h-screen">
				<Sidenav />
			</Drawer>
		</div>
	);
};

export default ToggleButton;
