import React from "react";
import ToggleButton from "./ToggleButton";
import { Badge, Input } from "antd";
import { CiCircleChevDown, CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import Image from "next/image";

export default function Topnav() {
	return (
		<div className="flex justify-between w-full bg-white px-5 py-2 items-center">
			<div className="flex gap-4 items-center">
				<ToggleButton />
				<Input placeholder="Search" className="bg-CBG rounded-full w-80" prefix={<CiSearch />} />
			</div>
			<div className="flex gap-6 items-center">
				<div className="cursor-pointer">
					<Badge count={6} size="small" offset={[-4, 2]}>
						<FaBell className="text-2xl text-CBlue" />
					</Badge>
				</div>
				<div className="flex gap-3 items-center">
					<label htmlFor="lang">
						<Image src="/image/Flag.png" width={40} height={25} alt="Flag" />
					</label>
					<select className="text-sm" name="lang" id="">
						<option value="en">English</option>
						<option value="bn">Bangla</option>
					</select>
				</div>
				<div className="flex gap-3 items-center cursor-pointer">
					<Image src="/image/pp.png" width={44} height={44} alt="Profile Picture" />
					<div className="flex flex-col">
						<p className="text-sm font-bold">Moni Roy</p>
						<p className="text-xs font-semibold">Admin</p>
					</div>
					<CiCircleChevDown className="text-xl" />
				</div>
			</div>
		</div>
	);
}
