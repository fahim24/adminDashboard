"use client";
import React from "react";
import { FaArrowRotateLeft } from "react-icons/fa6";

export default function ResetFilter() {
	return (
		<button type="reset" className="p-2.5 hover:bg-CBG flex items-center gap-2.5 text-CRed">
			<FaArrowRotateLeft /> Reset Filter
		</button>
	);
}
