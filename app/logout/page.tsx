"use client";
import { useLoginContext } from "@/modules/Contexts/LoginContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Logout() {
	const { isLoggedIn, setisLoggedIn } = useLoginContext();
	const router = useRouter();

	setisLoggedIn(false);
	useEffect(() => {
		if (!isLoggedIn) {
			// console.log(isLoggedIn);
			router.push("/login");
		}
	}, [isLoggedIn, router]);
}
