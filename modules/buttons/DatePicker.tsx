"use client";
import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { DatePicker, DatePickerProps } from "antd";

export default function DatePickerButton() {
	const onChange: DatePickerProps["onChange"] = (date, dateString) => {
		// console.log(date, dateString);
	};

	return (
		<div className="p-2.5 hover:bg-CBG date-filter w-40 cursor-pointer">
			<DatePicker
				// needConfirm
				onChange={onChange}
				placeholder="Date"
				suffixIcon={<FaAngleDown className="text-CDark" />}
				className="text-CDark"
				size="small"
				variant="borderless"
			/>
		</div>
	);
}
