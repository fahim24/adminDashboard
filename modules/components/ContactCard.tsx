import React from "react";
import Image from "next/image";
import { FaRegEnvelope } from "react-icons/fa";

type ContactCardProps = {
	img: string;
	name: string;
	email: string;
};

export default function ContactCard({ img, name, email }: ContactCardProps) {
	return (
		<div className="bg-white rounded-lg">
			<Image src={img} alt="contact image" width={300} height={275} className="w-full"></Image>
			<div className="p-4 text-center space-y-1">
				<p className="font-bold">{name}</p>
				<p className="text-CLight font-semibold">{email}</p>
			</div>
			<button className="mx-auto border px-4 py-2 my-4 rounded flex items-center gap-2.5 text-CLight hover:text-black hover:border-black ">
				<FaRegEnvelope /> Message
			</button>
		</div>
	);
}
