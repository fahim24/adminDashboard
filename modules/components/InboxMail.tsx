import { Rate } from "antd";
import Link from "next/link";
import React from "react";

type InboxMailProps = {
	key: string;
	rate: number;
	name: string;
	description: string;
	label?: JSX.Element;
	time: string;
};

export default function InboxMail({ rate, name, description, label, time }: InboxMailProps) {
	return (
		<div className="p-4 flex flex-col lg:flex-row gap-2.5 items-start lg:items-center has-[:checked]:bg-CBG text-sm">
			<div className="flex gap-2.5 items-center w-full lg:w-1/4">
				<input type="checkbox" className="checked:accent-black" />
				<Rate count={1} defaultValue={rate} />
				<Link href="/dashboard/inbox/message" className="w-full">
					<p className="font-bold">{name}</p>
				</Link>
			</div>
			<Link href="/dashboard/inbox/message" className="w-full lg:w-3/4 pl-6 lg:pl-0">
				<div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-2.5 w-full">
					<div className="flex gap-2.5 items-center">
						{label}
						<p className="font-semibold">{description}</p>
					</div>
					<p className="font-semibold text-CLight">{time}</p>
				</div>
			</Link>
		</div>
	);
}

export const PrimaryLabel = () => {
	return (
		<div className="w-16 h-6 flex justify-center items-center  bg-CGreen bg-opacity-20 text-CGreen rounded font-semibold text-xs shrink-0">
			Primary
		</div>
	);
};
export const WorkLabel = () => {
	return (
		<div className="w-16 h-6 flex justify-center items-center  bg-COrange bg-opacity-20 text-COrange rounded font-semibold text-xs shrink-0">
			Work
		</div>
	);
};
export const FriendsLabel = () => {
	return (
		<div className="w-16 h-6 flex justify-center items-center  bg-CPurple bg-opacity-20 text-CPurple rounded font-semibold text-xs shrink-0">
			Friends
		</div>
	);
};
export const SocialLabel = () => {
	return (
		<div className="w-16 h-6 flex justify-center items-center  bg-CBlue bg-opacity-20 text-CBlue rounded font-semibold text-xs shrink-0">
			Social
		</div>
	);
};
