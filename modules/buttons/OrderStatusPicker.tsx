"use client";
import React, { useState } from "react";
import { Popover } from "antd";
import { FaAngleDown } from "react-icons/fa";

export default function OrderStatusPicker() {
	const [clicked, setClicked] = useState(false);
	const hide = () => {
		setClicked(false);
	};
	const handleClickChange = (open: boolean) => {
		setClicked(open);
	};
	const statusPickerContent = (
		<div className="space-y-5 p-5">
			<p className="text-lg font-bold">Select Order Status</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit mx-auto gap-5 status-picker">
				{/* status 1 */}
				<div className="relative inline-block w-40 h-8">
					<input
						id="status1"
						type="checkbox"
						name="status-pick"
						value="status1"
						className="hidden"
					/>
					<label htmlFor="status1">
						<span>Completed</span>
					</label>
				</div>
				{/* status 2 */}
				<div className="relative inline-block w-40 h-8">
					<input
						id="status2"
						type="checkbox"
						name="status-pick"
						value="status2"
						className="hidden"
					/>
					<label htmlFor="status2">
						<span>Processing</span>
					</label>
				</div>
				{/* status 3 */}
				<div className="relative inline-block w-40 h-8">
					<input
						id="status3"
						type="checkbox"
						name="status-pick"
						value="status3"
						className="hidden"
					/>
					<label htmlFor="status3">
						<span>Rejected</span>
					</label>
				</div>
				{/* status 4 */}
				<div className="relative inline-block w-40 h-8">
					<input
						id="status4"
						type="checkbox"
						name="status-pick"
						value="status4"
						className="hidden"
					/>
					<label htmlFor="status4">
						<span>On Hold</span>
					</label>
				</div>
				{/* status 5 */}
				<div className="relative inline-block w-40 h-8">
					<input
						id="status5"
						type="checkbox"
						name="status-pick"
						value="status5"
						className="hidden"
					/>
					<label htmlFor="status5">
						<span>In Transit</span>
					</label>
				</div>
			</div>
			<p className="text-sm text-CGray">*You can choose multiple Order status</p>
			<button
				onClick={hide}
				className="bg-CBlue text-white font-semibold flex items-center justify-center  w-32 h-9 rounded-lg mx-auto">
				Apply Now
			</button>
		</div>
	);
	return (
		<Popover
			content={statusPickerContent}
			trigger="click"
			placement="bottom"
			open={clicked}
			onOpenChange={handleClickChange}>
			<button className="p-2.5 hover:bg-CBG flex items-center justify-between gap-2.5 w-32 lg:w-40">
				Order Status <FaAngleDown />
			</button>
		</Popover>
	);
}
