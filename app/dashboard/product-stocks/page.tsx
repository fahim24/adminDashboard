import React from "react";
// Import from next
import { Metadata } from "next";
import { Input } from "antd";
import { CiSearch } from "react-icons/ci";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ProductStockItem from "@/modules/components/ProductStockItem";

export const metadata: Metadata = {
	title: "Product Stocks",
};

export default function ProductStock() {
	const productStocks = [
		{
			key: "prod1",
			img: "/image/stock1.png",
			name: "Apple Watch Series 4",
			category: "Digital Product",
			price: "$690.00",
			piece: 63,
			colors: ["black", "CGray", "CPink"],
		},
		{
			key: "prod2",
			img: "/image/stock2.png",
			name: "Microsoft Headsquare",
			category: "Digital Product",
			price: "$190.00",
			piece: 13,
			colors: ["black", "CPink", "CBlue", "COrange"],
		},
		{
			key: "prod3",
			img: "/image/stock3.png",
			name: "Women’s Dress",
			category: "Fashion",
			price: "$640.00",
			piece: 635,
			colors: ["fuchsia-800", "sky-300", "indigo-900", "blue-700"],
		},
		{
			key: "prod4",
			img: "/image/stock4.png",
			name: "Samsung A50",
			category: "Mobile",
			price: "$400.00",
			piece: 67,
			colors: ["blue-700", "black", "fuchsia-800"],
		},
		{
			key: "prod5",
			img: "/image/stock5.png",
			name: "Camera",
			category: "Electronic",
			price: "$420.00",
			piece: 52,
			colors: ["blue-700", "black", "fuchsia-800"],
		},
		{
			key: "prod6",
			img: "/image/stock2.png",
			name: "Microsoft Headsquare",
			category: "Digital Product",
			price: "$190.00",
			piece: 13,
			colors: ["black", "CPink", "CBlue", "COrange"],
		},
		{
			key: "prod7",
			img: "/image/stock3.png",
			name: "Women’s Dress",
			category: "Fashion",
			price: "$640.00",
			piece: 635,
			colors: ["fuchsia-800", "sky-300", "indigo-900", "blue-700"],
		},
	];
	return (
		// product Stock Page Start
		<div className="space-y-5">
			{/* Page Heading Start*/}
			<div className="flex justify-between items-center gap-5">
				<h1 className="text-3xl text-CDark font-bold">Product Stocks</h1>
				<Input
					placeholder="Search product name"
					className="bg-white rounded-full w-60"
					prefix={<CiSearch />}
				/>
			</div>
			{/* Product Stock Start */}
			<div className="bg-white border rounded-2xl">
				<table className="table-auto w-full  ">
					<thead>
						<tr className="text-left border-b">
							<th className="px-5 py-2.5">Image</th>
							<th>Product Name</th>
							<th>Category</th>
							<th>Price</th>
							<th>Piece</th>
							<th>Available Color</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody className="divide-y text-sm">
						{productStocks.map((product) => (
							// eslint-disable-next-line react/jsx-key
							<ProductStockItem {...product} />
						))}
					</tbody>
				</table>
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
