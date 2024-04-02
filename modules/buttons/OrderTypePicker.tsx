"use client";
import React, { useState } from "react";
import { Popover } from "antd";
import { FaAngleDown } from "react-icons/fa";

export default function OrderTypePicker() {
	const [clicked, setClicked] = useState(false);
	const hide = () => {
		setClicked(false);
	};
	const handleClickChange = (open: boolean) => {
		setClicked(open);
	};
	const typePickerContent = (
		<div className="space-y-5 p-5">
			<p className="text-lg font-bold">Select Order Type</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-fit gap-5 type-picker">
				{/* Type 1 */}
				<div className="relative inline-block w-40 h-8">
					<input id="type1" type="checkbox" name="type-pick" value="type1" className="hidden" />
					<label htmlFor="type1">
						<span>Health & Medicine</span>
					</label>
				</div>
				{/* Type 2 */}
				<div className="relative inline-block w-40 h-8">
					<input id="type2" type="checkbox" name="type-pick" value="type2" className="hidden" />
					<label htmlFor="type2">
						<span>Book & Stationary</span>
					</label>
				</div>
				{/* Type 3 */}
				<div className="relative inline-block w-40 h-8">
					<input id="type3" type="checkbox" name="type-pick" value="type3" className="hidden" />
					<label htmlFor="type3">
						<span>Services & Industry</span>
					</label>
				</div>
				{/* Type 4 */}
				<div className="relative inline-block w-40 h-8">
					<input id="type4" type="checkbox" name="type-pick" value="type4" className="hidden" />
					<label htmlFor="type4">
						<span>Fashion & Beauty</span>
					</label>
				</div>
				{/* Type 5 */}
				<div className="relative inline-block w-40 h-8">
					<input id="type5" type="checkbox" name="type-pick" value="type5" className="hidden" />
					<label htmlFor="type5">
						<span>Home & Living</span>
					</label>
				</div>
				{/* Type 6 */}
				<div className="relative inline-block w-40 h-8">
					<input id="type6" type="checkbox" name="type-pick" value="type6" className="hidden" />
					<label htmlFor="type6">
						<span>Electronics</span>
					</label>
				</div>
				{/* Type 7 */}
				<div className="relative inline-block w-40 h-8">
					<input id="type7" type="checkbox" name="type-pick" value="type7" className="hidden" />
					<label htmlFor="type7">
						<span>Mobile & Phone</span>
					</label>
				</div>
				{/* Type 8 */}
				<div className="relative inline-block w-40 h-8">
					<input id="type8" type="checkbox" name="type-pick" value="type8" className="hidden" />
					<label htmlFor="type8">
						<span>Accessories</span>
					</label>
				</div>
			</div>
			<p className="text-sm text-CGray">*You can choose multiple Order type</p>
			<button
				onClick={hide}
				className="bg-CBlue text-white font-semibold flex items-center justify-center  w-32 h-9 rounded-lg mx-auto">
				Apply Now
			</button>
		</div>
	);
	return (
		<Popover
			content={typePickerContent}
			trigger="click"
			placement="bottom"
			open={clicked}
			onOpenChange={handleClickChange}>
			<button className="p-2.5 hover:bg-CBG flex items-center justify-between gap-2.5 w-32 lg:w-40">
				Order Type <FaAngleDown />
			</button>
		</Popover>
	);
}
