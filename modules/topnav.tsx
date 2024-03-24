import React from "react";
import ToggleButton from "./ToggleButton";
import { Badge, Divider, Input, Popover, Select } from "antd";
import { CiCircleChevDown, CiSearch } from "react-icons/ci";
import {
	FaAngleDown,
	FaBell,
	FaCalendarAlt,
	FaExclamation,
	FaKey,
	FaSignOutAlt,
	FaUser,
	FaUserCog,
} from "react-icons/fa";
import Image from "next/image";
import { FaGear } from "react-icons/fa6";
import { BsArrowRepeat } from "react-icons/bs";

const notiContent = (
	<div className="space-y-4">
		<Divider style={{ margin: "10px 0px" }} />
		<div className="flex items-center gap-2 cursor-pointer">
			<div className="size-9 bg-CBlue rounded-full flex justify-center items-center">
				<FaGear className="text-white text-base" />
			</div>
			<div className="">
				<p className="font-semibold">Settings</p>
				<p className="text-CGray">Update Dashboard</p>
			</div>
		</div>
		<div className="flex items-center gap-2 cursor-pointer">
			<div className="size-9 bg-CPink rounded-full flex justify-center items-center">
				<FaCalendarAlt className="text-white text-base" />
			</div>
			<div className="">
				<p className="font-semibold">Event Update</p>
				<p className="text-CGray">An event date update again</p>
			</div>
		</div>
		<div className="flex items-center gap-2 cursor-pointer">
			<div className="size-9 bg-CPurple rounded-full flex justify-center items-center">
				<FaUser className="text-white text-base" />
			</div>
			<div className="">
				<p className="font-semibold">Profile</p>
				<p className="text-CGray">Update your profile</p>
			</div>
		</div>
		<div className="flex items-center gap-2 cursor-pointer">
			<div className="size-9 bg-CRed rounded-full flex justify-center items-center">
				<FaExclamation className="text-white text-base" />
			</div>
			<div className="">
				<p className="font-semibold">Application Error</p>
				<p className="text-CGray">Check Your runnung application</p>
			</div>
		</div>
		<Divider style={{ margin: "10px 0px" }} />
		<button className="flex justify-center items-center text-CGray w-full">
			See all notifications
		</button>
	</div>
);

const profContent = (
	<div className="divide-y">
		<div className="flex items-center gap-2 cursor-pointer text-base p-3">
			<FaUserCog className="text-CBlue  text-lg" />
			<p className=" font-semibold">Manage Account</p>
		</div>
		<div className="flex items-center gap-2 cursor-pointer text-base p-3">
			<FaKey className="text-CPink  text-lg" />
			<p className=" font-semibold">Change Password</p>
		</div>
		<div className="flex items-center gap-2 cursor-pointer text-base p-3">
			<BsArrowRepeat className="text-CPurple font-bold text-lg" />
			<p className=" font-semibold">Activity Log </p>
		</div>
		<div className="flex items-center gap-2 cursor-pointer text-base p-3">
			<FaSignOutAlt className="text-CRed  text-lg" />
			<p className=" font-semibold">Log out</p>
		</div>
	</div>
);

const Topnav: React.FC = () => {
	return (
		<div className="flex justify-between w-full bg-white px-5 py-2 items-center sticky top-0 z-10 shadow-sm ">
			<div className="flex gap-4 items-center">
				<ToggleButton />
				<Input placeholder="Search" className="bg-CBG rounded-full w-80" prefix={<CiSearch />} />
			</div>
			<div className="flex gap-6 items-center">
				<div className="cursor-pointer">
					<Popover placement="bottom" content={notiContent} title="Notification" trigger="click">
						<Badge count={6} size="small" offset={[-4, 2]}>
							<FaBell className="text-2xl text-CBlue" />
						</Badge>
					</Popover>
				</div>
				<div className="lang">
					<Select
						defaultValue="en"
						className="w-36"
						suffixIcon={<FaAngleDown className="text-lg text-CDark" />}
						options={[
							{
								label: <span>Select language</span>,
								title: "lang",
								options: [
									{
										value: "en",
										label: (
											<span className="flex items-center gap-2">
												<Image src="/image/enFlag.png" width={44} height={30} alt="English Flag" />{" "}
												English
											</span>
										),
									},
									{
										value: "fr",
										label: (
											<span className="flex items-center gap-2">
												<Image src="/image/frFlag.png" width={44} height={30} alt="French Flag" />{" "}
												French
											</span>
										),
									},
									{
										value: "es",
										label: (
											<span className="flex items-center gap-2">
												<Image src="/image/esFlag.png" width={44} height={30} alt="Spanish Flag" />{" "}
												Spanish
											</span>
										),
									},
								],
							},
						]}
					/>
				</div>
				<Popover placement="bottomLeft" arrow={false} content={profContent} trigger="click">
					<div className="flex gap-3 items-center cursor-pointer">
						<Image src="/image/pp.png" width={44} height={44} alt="Profile Picture" />
						<div className="flex flex-col">
							<p className="text-sm font-bold">Moni Roy</p>
							<p className="text-xs font-semibold">Admin</p>
						</div>
						<CiCircleChevDown className="text-xl" />
					</div>
				</Popover>
			</div>
		</div>
	);
};

export default Topnav;
