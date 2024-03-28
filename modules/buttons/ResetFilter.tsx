"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowRotateLeft } from "react-icons/fa6";

export default function ResetFilter() {
	const router = useRouter();

	return (
		<button
			onClick={() => {
				router.refresh();
			}}
			className="p-2.5 hover:bg-CBG flex items-center gap-2.5 text-CRed">
			<FaArrowRotateLeft /> Reset Filter
		</button>
	);
}
