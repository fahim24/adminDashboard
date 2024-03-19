"use client";

import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";

export default function ToggleButton() {
	const [collapsed, setCollapsed] = useState(false);

	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};

	return (
		<button onClick={toggleCollapsed}>
			<RiMenuFill className="text-2xl" />
		</button>
	);
}
