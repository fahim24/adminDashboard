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
		<tr className="font-semibold text-center border-b">
			<td className=" p-5 ">{id}</td>
			<td>{description}</td>
			<td>{quantity}</td>
			<td>{`$${baseCost}`}</td>
			<td>{`$${totalCost}`}</td>
		</tr>
	);
}
