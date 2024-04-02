import React from "react";
import { Rate } from "antd";
import Link from "next/link";

type StarredMailProps = {
	key: string;
	name: string;
	description: string;
	time: string;
};

export default function StarredMail({ name, description, time }: StarredMailProps) {
	return (
		<div className="p-4 has-[:checked]:bg-CBG text-sm flex flex-col lg:flex-row gap-2.5 items-start lg:items-center">
			<div className="flex gap-2.5 items-center w-full lg:w-1/4">
				<input type="checkbox" className="accent-black" />
				<Rate count={1} defaultValue={1} />
				<Link href="/dashboard/inbox/message" className="w-full">
					<p className="font-bold">{name}</p>
				</Link>
			</div>
			<Link href="/dashboard/inbox/message" className="w-full lg:w-3/4 pl-6 lg:pl-0">
				<div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-2.5 w-full">
					<div className="flex gap-2.5 items-center">
						<p className="font-semibold">{description}</p>
					</div>
					<p className="font-semibold text-CLight">{time}</p>
				</div>
			</Link>
		</div>
	);
}
