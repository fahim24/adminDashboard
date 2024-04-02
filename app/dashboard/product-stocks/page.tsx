import React from "react";
// Import from next
import { Metadata } from "next";
//
import { Input } from "antd";
//
import { CiSearch } from "react-icons/ci";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// Import from components
import ProductStockItems from "@/modules/components/ProductStockItems";

//
export const metadata: Metadata = {
	title: "Product Stocks",
};

export default function ProductStock() {
	return (
		// product Stock Page Start
		<div className="space-y-5">
			{/* Page Heading Start*/}
			<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
				<h1 className="text-3xl text-CDark font-bold ">Product Stocks</h1>
				<Input
					placeholder="Search product name"
					className="bg-white rounded-full w-60"
					prefix={<CiSearch />}
				/>
			</div>
			{/* Product Stock Start */}
			<div className="grid grid-cols-1">
				<ProductStockItems />
			</div>
			{/* Pagination Start */}
			<div className="flex items-center justify-between">
				<p className="font-semibold text-CLight">Showing 1-7 of 78</p>
				<div className="bg-white rounded-lg divide-x border">
					<button className="py-3 px-5 hover:bg-CLight hover:bg-opacity-20">
						<FaAngleLeft />
					</button>
					<button className="py-3 px-5 hover:bg-CLight hover:bg-opacity-20">
						<FaAngleRight />
					</button>
				</div>
			</div>
		</div>
	);
}
