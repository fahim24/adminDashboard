import { Rate } from "antd";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";

type ToDoProps = {
	key: string;
	description: string;
	rate: number;
};

export default function ToDo({ description, rate }: ToDoProps) {
	return (
		<div className="flex justify-between items-center bg-white px-5  rounded-lg has-[:checked]:bg-CBlue  has-[:checked]:text-white h-14 border">
			<div className="flex items-center gap-5 peer/done">
				<input type="checkbox" className=" checked:ring-1 checked:ring-white" />
				<p>{description}</p>
			</div>
			<div className="flex items-center gap-5 peer-has-[:checked]/done:hidden">
				<Rate count={1} defaultValue={rate} />
				<button className="p-1 text-CGray border rounded-full hover:text-CRed hover:border-CRed peer-checked/done:hidden">
					<IoMdClose />
				</button>
			</div>
			<button className="hidden peer-has-[:checked]/done:block px-3 py-2 rounded-full text-CRed bg-CGray bg-opacity-20">
				<RiDeleteBinLine />
			</button>
		</div>
	);
}
