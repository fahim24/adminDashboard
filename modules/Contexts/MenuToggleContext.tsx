"use client";

import React, { createContext, useContext, useState } from "react";

interface MenuToggleContextProps {
	collapsed: boolean;
	setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuToggleContext = createContext<MenuToggleContextProps | undefined>(undefined);

interface MenuToggleProps {
	children?: React.ReactNode;
}

const MenuToggleProvider: React.FC<MenuToggleProps> = ({ children }) => {
	const [collapsed, setCollapsed] = useState<boolean>(false);

	return (
		<MenuToggleContext.Provider value={{ collapsed, setCollapsed }}>
			{children}
		</MenuToggleContext.Provider>
	);
};

export const useMenuToggleContext = () => {
	const context = useContext(MenuToggleContext);
	if (context === undefined) {
		throw new Error("useMenuToggleContext must be used within a MenuToggleProvider");
	}
	return context;
};

export { MenuToggleProvider };
