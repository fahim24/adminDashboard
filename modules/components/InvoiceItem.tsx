import React from "react";

type InvoiceItemProps = {
	id: number;
	description: string;
	quantity: number;
	baseCost: number;
	totalCost: number;
};

export default function InvoiceItem({
	id,
	description,
	quantity,
	baseCost,
	totalCost,
}: InvoiceItemProps) {
	return (
		<tr className=" hover:bg-gray-100 ">
			<td className="p-5 ">{id}</td>
			<td className="p-5 ">{description}</td>
			<td className="p-5 ">{quantity}</td>
			<td className="p-5 ">{`$${baseCost}`}</td>
			<td className="p-5 ">{`$${totalCost}`}</td>
		</tr>
	);
}
