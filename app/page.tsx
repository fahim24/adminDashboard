"use client";
import { useLoginContext } from "@/modules/Contexts/LoginContext";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const HomePage = () => {
	const { isLoggedIn } = useLoginContext();
	// const [isLoggedin, setIsLoggedin] = useState(false);
	return <>{isLoggedIn ? redirect("/dashboard") : redirect("/login")}</>;
};

export default HomePage;
