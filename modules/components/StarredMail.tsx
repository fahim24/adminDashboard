import React from "react";
import { Rate } from "antd";

type StarredMailProps = {
	key: string;
	name: string;
	description: string;
	time: string;
};

export default function StarredMail({ name, description, time }: StarredMailProps) {
	return (
		<div className="p-4 has-[:checked]:bg-CBG text-sm flex gap-2.5 items-center">
			<div className="flex gap-2.5 items-center w-1/4">
				<input type="checkbox" className="accent-black" />
				<Rate count={1} defaultValue={1} />
				<p className="font-bold">{name}</p>
			</div>
			<div className="flex items-center justify-between gap-2.5 w-3/4">
				<div className="flex gap-2.5 items-center">
					<p className="font-semibold">{description}</p>
				</div>
				<p className="font-semibold text-CLight">{time}</p>
			</div>
		</div>
	);
}
