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

export default function ProductStockItem({
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
						<span key={color} className={`size-5 rounded-full shrink-0 bg-${color}`}></span>
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
