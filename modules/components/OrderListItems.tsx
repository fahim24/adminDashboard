import React from "react";

type OrderItemProps = {
	id: string;
	name: string;
	address: string;
	date: string;
	type: string;
	status: JSX.Element;
};

export default function OrderListItems() {
	const orderItems = [
		{
			id: "00001",
			name: "Christine Brooks",
			address: "089 Kutch Green Apt. 448",
			date: "04 Sep 2019",
			type: "Electric",
			status: <StatusCompleted />,
		},
		{
			id: "00002",
			name: "Rosie Pearson",
			address: "979 Immanuel Ferry Suite 526",
			date: "28 May 2019",
			type: "Book",
			status: <StatusProcessing />,
		},
		{
			id: "00003",
			name: "Darrell Caldwell",
			address: "8587 Frida Ports",
			date: "23 Nov 2019",
			type: "Medicine",
			status: <StatusRejected />,
		},
		{
			id: "00004",
			name: "Gilbert Johnston",
			address: "768 Destiny Lake Suite 600",
			date: "05 Feb 2019",
			type: "Mobile",
			status: <StatusCompleted />,
		},
		{
			id: "00005",
			name: "Alan Cain",
			address: "042 Mylene Throughway",
			date: "29 Jul 2019",
			type: "Watch",
			status: <StatusProcessing />,
		},
		{
			id: "00006",
			name: "Alfred Murray",
			address: "543 Weimann Mountain",
			date: "15 Aug 2019",
			type: "Medicine",
			status: <StatusCompleted />,
		},
		{
			id: "00007",
			name: "Maggie Sullivan",
			address: "New Scottieberg",
			date: "21 Dec 2019",
			type: "Watch",
			status: <StatusProcessing />,
		},
		{
			id: "00008",
			name: "Rosie Todd",
			address: "New Jon",
			date: "30 Apr 2019",
			type: "Medicine",
			status: <StatusOnHold />,
		},
		{
			id: "00009",
			name: "Dollie Hines",
			address: "124 Lyla Forge Suite 975",
			date: "09 Jan 2019",
			type: "Book",
			status: <StatusInTransit />,
		},
	];
	return (
		<div className="bg-white border rounded-2xl overflow-x-auto scrollbar">
			<table className=" w-full text-left text-CDark font-semibold whitespace-nowrap">
				<thead className="font-bold bg-CLight bg-opacity-20 rounded-2xl">
					<tr>
						<th className="px-5 py-3">ID</th>
						<th className="px-5 py-3">NAME</th>
						<th className="px-5 py-3">ADDRESS</th>
						<th className="px-5 py-3">DATE</th>
						<th className="px-5 py-3">TYPE</th>
						<th className="px-5 py-3">STATUS</th>
					</tr>
				</thead>
				<tbody className="divide-y text-sm">
					{orderItems.map((item) => (
						<OrderItem key={item.id} {...item} />
					))}
				</tbody>
			</table>
		</div>
	);
}

// export function OrderItem({ id, name, address, date, type, status }: OrderItemProps) {
export function OrderItem({ id, name, address, date, type, status }: OrderItemProps) {
	return (
		<tr className="hover:bg-gray-100 ">
			<td className="px-5 py-3">{id}</td>
			<td className="px-5 py-3">{name}</td>
			<td className="px-5 py-3">{address}</td>
			<td className="px-5 py-3">{date}</td>
			<td className="px-5 py-3">{type}</td>
			<td className="px-5 py-3">{status}</td>
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
