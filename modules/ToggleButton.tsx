"use client";
import React from "react";
import { RiMenuFill } from "react-icons/ri";
import { useMenuToggleContext } from "@/modules/Contexts/MenuToggleContext";

const ToggleButton: React.FC = () => {
	const { collapsed, setCollapsed } = useMenuToggleContext();
	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};

	return (
		// <button>
		<button onClick={toggleCollapsed}>
			<RiMenuFill className="text-2xl" />
		</button>
	);
};

export default ToggleButton;
