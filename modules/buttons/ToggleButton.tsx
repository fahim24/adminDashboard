"use client";
import React, { useEffect, useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { useMenuToggleContext } from "@/modules/Contexts/MenuToggleContext";
import { Drawer } from "antd";
import Sidenav from "@/modules/sidenav";

const ToggleButton: React.FC = () => {
	const { collapsed, setCollapsed } = useMenuToggleContext();
	const [open, setOpen] = useState(false);
	const [width, setWidth] = useState(() => {
		if (typeof window !== "undefined") {
			return window.innerWidth;
		}

		return 1024;
	});

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		if (width >= 768) {
			setOpen(false);
		}
		if (width >= 768 && width < 1024) {
			setCollapsed(true);
		} else if (width < 768) {
			setCollapsed(false);
		}

		return () => {
			window.removeEventListener("resize", handleResize);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [width]);

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
				// styles.body=""
				bodyStyle={{ padding: 0 }}
				className="h-screen">
				<Sidenav />
			</Drawer>
		</div>
	);
};

export default ToggleButton;
