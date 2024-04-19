"use client";
import React, { useEffect } from "react";
import { useLoginContext } from "@/modules/Contexts/LoginContext";
import { useRouter } from "next/navigation";

const SignInButton: React.FC = () => {
	const { isLoggedIn, setisLoggedIn } = useLoginContext();
	const router = useRouter();
	const Login = () => {
		setisLoggedIn(true);
	};

	useEffect(() => {
		if (isLoggedIn) {
			// console.log(isLoggedIn);
			router.push("/dashboard");
		}
	}, [isLoggedIn, router]);

	return (
		// <button>
		<button onClick={() => Login()} className="btn w-3/4 mx-auto mb-3">
			Sign In
		</button>
	);
};

export default SignInButton;
