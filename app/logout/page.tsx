"use client";
import { useLoginContext } from "@/modules/Contexts/LoginContext";
import { useRouter } from "next/navigation";

export default function Logout() {
	const { isLoggedIn, setisLoggedIn } = useLoginContext();
	const router = useRouter();

	setisLoggedIn(!isLoggedIn);
	router.push("/login");
}
