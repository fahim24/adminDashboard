import Link from "next/link";
import React from "react";
import { Metadata } from "next";
import SignInButton from "@/modules/buttons/SignInButton";
import { Alert } from "antd";

export const metadata: Metadata = {
	title: "Login",
};

export default function LoginPage() {
	return (
		<div className="relative h-screen w-screen flex justify-center items-center bg-img">
			<Alert
				description="Click Sign In to continue, No need for Email and Password"
				message="Information about Sign in"
				type="info"
				showIcon
				closable
				className="absolute top-10  right-10 "
			/>
			<div className="bg-white p-10 rounded-xl">
				<p className="text-3xl font-bold text-center mb-2">Login to Account</p>
				<p className="text-center text-lg font-semibold text-CLight mb-5 px-10">
					Please enter your email and password to continue
				</p>
				<div className="flex flex-col gap-2 mb-4">
					<label>Email address:</label>
					<input
						placeholder="Someone@example.com"
						className="bg-CBG rounded w-full py-2 px-3 border"
					/>
				</div>
				<div className="flex flex-col gap-2 mb-4">
					<label className="flex justify-between items-center">
						<span>Password:</span> <button className="text-CLight text-sm">Forget Password?</button>
					</label>
					<input
						type="Password"
						placeholder="* * * * * * * *"
						className="bg-CBG rounded w-full py-2 px-3 border"
					/>
				</div>
				<div className="flex items-center gap-2.5 text-CLight mb-5">
					<input type="checkbox" />
					<label>Remember Password</label>
				</div>
				<SignInButton />
				<div className="text-CLight flex items-center justify-center gap-2">
					Don&apos;t have an account?
					<Link href="/register" className="text-CBlue hover:underline">
						Create Account
					</Link>
				</div>
			</div>
		</div>
	);
}
