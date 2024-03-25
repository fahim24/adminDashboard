import Link from "next/link";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Create Account",
};

export default function RegisterPage() {
	return (
		<div className="h-screen w-screen flex justify-center items-center bg-img">
			<div className="bg-white p-10 rounded-xl">
				<p className="text-3xl font-bold text-center mb-2">Create an Account</p>
				<p className="text-center text-lg font-semibold text-CLight mb-5 px-16">
					Create a account to continue
				</p>
				<div className="flex flex-col gap-2 mb-4">
					<label>Email address:</label>
					<input
						type="email"
						placeholder="Someone@example.com"
						className="bg-CBG rounded w-full py-2 px-3 border"
					/>
				</div>
				<div className="flex flex-col gap-2 mb-4">
					<label>Username:</label>
					<input
						type="text"
						placeholder="Username"
						className="bg-CBG rounded w-full py-2 px-3 border"
					/>
				</div>
				<div className="flex flex-col gap-2 mb-4">
					<label>Password:</label>
					<input
						type="Password"
						placeholder="* * * * * * * *"
						className="bg-CBG rounded w-full py-2 px-3 border"
					/>
				</div>
				<div className="flex items-center gap-2.5 text-CLight mb-5">
					<input type="checkbox" />
					<label>I accept terms and conditions</label>
				</div>
				<Link href="/login" className="block w-3/4 mb-3 mx-auto">
					<button className="bg-CBlue py-3 px-5 w-full  text-white font-bold rounded-xl ">
						Sign Up
					</button>
				</Link>

				<div className="text-CLight flex items-center justify-center gap-2">
					Already have an account?
					<Link href="/login" className="text-CBlue hover:underline">
						Login
					</Link>
				</div>
			</div>
		</div>
	);
}
