"use client";

import React, { createContext, useContext, useState } from "react";

interface LoginContextProps {
	isLoggedIn: boolean;
	setisLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginContext = createContext<LoginContextProps | undefined>(undefined);

interface MenuToggleProps {
	children?: React.ReactNode;
}

const LoginProvider: React.FC<MenuToggleProps> = ({ children }) => {
	const [isLoggedIn, setisLoggedIn] = useState<boolean>(false);

	return (
		<LoginContext.Provider value={{ isLoggedIn, setisLoggedIn }}>{children}</LoginContext.Provider>
	);
};

export const useLoginContext = () => {
	const context = useContext(LoginContext);
	if (context === undefined) {
		throw new Error("useLoginContext must be used within a LoginProvider");
	}
	return context;
};

export { LoginProvider };
