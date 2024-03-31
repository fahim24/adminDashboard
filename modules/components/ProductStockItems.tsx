import React from "react";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

type ProductStockItemProps = {
	key: string;
	img: string;
	name: string;
	category: string;
	price: string;
	piece: number;
	colors: string[];
};

export default function ProductStockItems() {
	const productStocks = [
		{
			key: "prod1",
			img: "/image/stock1.png",
			name: "Apple Watch Series 4",
			category: "Digital Product",
			price: "$690.00",
			piece: 63,
			colors: ["bg-CDark", "bg-CGray", "bg-CPink"],
		},
		{
			key: "prod2",
			img: "/image/stock2.png",
			name: "Microsoft Headsquare",
			category: "Digital Product",
			price: "$190.00",
			piece: 13,
			colors: ["bg-CDark", "bg-CPink", "bg-CBlue", "bg-COrange"],
		},
		{
			key: "prod3",
			img: "/image/stock3.png",
			name: "Women’s Dress",
			category: "Fashion",
			price: "$640.00",
			piece: 635,
			colors: ["bg-fuchsia-800", "bg-sky-300", "bg-indigo-900", "bg-blue-700"],
		},
		{
			key: "prod4",
			img: "/image/stock4.png",
			name: "Samsung A50",
			category: "Mobile",
			price: "$400.00",
			piece: 67,
			colors: ["bg-blue-700", "bg-CDark", "bg-fuchsia-800"],
		},
		{
			key: "prod5",
			img: "/image/stock5.png",
			name: "Camera",
			category: "Electronic",
			price: "$420.00",
			piece: 52,
			colors: ["bg-blue-700", "bg-CDark", "bg-fuchsia-800"],
		},
		{
			key: "prod6",
			img: "/image/stock2.png",
			name: "Microsoft Headsquare",
			category: "Digital Product",
			price: "$190.00",
			piece: 13,
			colors: ["bg-CDark", "bg-CPink", "bg-CBlue", "bg-COrange"],
		},
		{
			key: "prod7",
			img: "/image/stock3.png",
			name: "Women’s Dress",
			category: "Fashion",
			price: "$640.00",
			piece: 635,
			colors: ["bg-fuchsia-800", "bg-sky-300", "bg-indigo-900", "bg-blue-700"],
		},
	];
	return (
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
	);
}

export function ProductStockItem({
	img,
	name,
	category,
	price,
	piece,
	colors,
}: ProductStockItemProps) {
	return (
		<tr className="font-semibold hover:bg-gray-100 ">
			<td className="flex items-center gap-1 px-5 py-2.5 cursor-pointer">
				<Image src={img} alt="Product icon" width={60} height={60} />
			</td>
			<td>{name}</td>
			<td>{category}</td>
			<td>{price}</td>
			<td>{piece}</td>
			<td>
				<div className="flex gap-2.5 items-center">
					{colors.map((color) => (
						<span key={color} className={`size-5 rounded-full shrink-0 ${color}`}></span>
					))}
				</div>
			</td>
			<td>
				<div className="bg-white rounded-lg divide-x border w-fit">
					<button className="py-2 px-3 text-CGray hover:bg-CLight hover:bg-opacity-5">
						<FaRegEdit />
					</button>
					<button className="py-2 px-3 hover:bg-CLight hover:bg-opacity-5 text-CRed">
						<RiDeleteBinLine />
					</button>
				</div>
			</td>
		</tr>
	);
}
