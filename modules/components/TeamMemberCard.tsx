import React from "react";
import Image from "next/image";
import { FaRegEnvelope } from "react-icons/fa";

type TeamMemberCardProps = {
	img: string;
	name: string;
	designation: string;
	email: string;
};

export default function TeamMemberCard({ img, name, designation, email }: TeamMemberCardProps) {
	return (
		<div className="bg-white rounded-lg p-5 cardBG">
			<div className="size-[110px]  mx-auto my-5">
				<Image src={img} alt="Team Member image" width={110} height={110}></Image>
			</div>
			<div className="text-center space-y-1">
				<p className="font-bold">{name}</p>
				<p className="text-CGray font-semibold text-sm">{designation}</p>
				<p className="text-CLight font-semibold text-sm">{email}</p>
			</div>
		</div>
	);
}
