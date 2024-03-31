import React from "react";

type OrderItemProps = {
	id: string;
	name: string;
	address: string;
	date: string;
	type: string;
	status: JSX.Element;
};

export default function OrderItem({ id, name, address, date, type, status }: OrderItemProps) {
	return (
		<tr className="font-semibold hover:bg-gray-100 ">
			<td className="flex items-center gap-1 p-5 cursor-pointer">{id}</td>
			<td>{name}</td>
			<td>{address}</td>
			<td>{date}</td>
			<td>{type}</td>
			<td>{status}</td>
		</tr>
	);
}

export const StatusCompleted = () => {
	return (
		<span className="bg-CGreen bg-opacity-20 text-CGreen rounded-lg w-24 h-7 flex items-center justify-center shrink-0 text-xs">
			Completed
		</span>
	);
};
export const StatusProcessing = () => {
	return (
		<span className="bg-CPurple bg-opacity-20 text-CPurple rounded-lg w-24 h-7 flex items-center justify-center shrink-0 text-xs">
			Processing
		</span>
	);
};
export const StatusRejected = () => {
	return (
		<span className="bg-CRed bg-opacity-20 text-CRed rounded-lg w-24 h-7 flex items-center justify-center shrink-0 text-xs">
			Rejected
		</span>
	);
};
export const StatusOnHold = () => {
	return (
		<span className="bg-COrange bg-opacity-20 text-COrange rounded-lg w-24 h-7 flex items-center justify-center shrink-0 text-xs">
			On Hold
		</span>
	);
};
export const StatusInTransit = () => {
	return (
		<span className="bg-CPink bg-opacity-20 text-CPink rounded-lg w-24 h-7 flex items-center justify-center shrink-0 text-xs">
			In Transit
		</span>
	);
};
