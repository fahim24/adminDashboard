// Import from react
import React from "react";
// Import from next
import { Metadata } from "next";
import { Rate } from "antd";
import { IoMdClose } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";

// Title and Metadata for the To-Do Page
export const metadata: Metadata = {
	title: "To-Do List",
};

export default function ToDoPage() {
	return (
		// To-Do Page Start
		<div className="space-y-5 mb-10">
			{/* Page Heading Start */}
			<div className="flex justify-between items-center mb-10">
				<p className="text-3xl text-CDark font-bold">To-Do List</p>
				<button className="bg-CBlue text-white px-5 py-2.5 rounded">Add New Task</button>
			</div>
			{/* Page Content Start */}
			<div className="space-y-5 mb-10">
				{/* To-Do Item 1 */}
				<div className="flex justify-between items-center bg-white px-5  rounded-lg has-[:checked]:bg-CBlue  has-[:checked]:text-white h-12">
					<div className="flex items-center gap-5 peer/done">
						<input type="checkbox" className=" checked:ring-1 checked:ring-white" />
						<p>Meeting with CEO</p>
					</div>
					<div className="flex items-center gap-5 peer-has-[:checked]/done:hidden">
						<Rate count={1} defaultValue={0} />
						<button className="p-1 text-CGray border rounded-full hover:text-CRed hover:border-CRed peer-checked/done:hidden">
							<IoMdClose />
						</button>
					</div>
					<button className="hidden peer-has-[:checked]/done:block px-3 py-1 rounded-full text-CRed bg-CGray bg-opacity-20">
						<RiDeleteBinLine />
					</button>
				</div>
				{/* To-Do Item 2 */}
				<div className="flex justify-between items-center bg-white px-5 py-3 rounded-lg has-[:checked]:bg-CBlue has-[:checked]:text-white">
					<div className="flex items-center gap-5">
						<input type="checkbox" className="peer/done checked:ring-1 checked:ring-white" />
						<p>Pick up kids from school</p>
					</div>
					<div className="flex items-center gap-5">
						<Rate count={1} defaultValue={1} />
						<button className="p-1 text-CGray border rounded-full hover:text-CRed hover:border-CRed peer-checked/done:hidden">
							<IoMdClose />
						</button>
					</div>
				</div>
				{/* To-Do Item 3 */}
				<div className="flex justify-between items-center bg-white px-5 py-3 rounded-lg has-[:checked]:bg-CBlue has-[:checked]:text-white">
					<div className="flex items-center gap-5">
						<input type="checkbox" className="peer/done checked:ring-1 checked:ring-white" />
						<p>Shopping with Brother</p>
					</div>
					<div className="flex items-center gap-5">
						<Rate count={1} defaultValue={0} />
						<button className="p-1 text-CGray border rounded-full hover:text-CRed hover:border-CRed peer-checked/done:hidden">
							<IoMdClose />
						</button>
					</div>
				</div>
				{/* To-Do Item 4 */}
				<div className="flex justify-between items-center bg-white px-5 py-3 rounded-lg has-[:checked]:bg-CBlue has-[:checked]:text-white">
					<div className="flex items-center gap-5">
						<input type="checkbox" className="peer/done checked:ring-1 checked:ring-white" />
						<p>Review with HR</p>
					</div>
					<div className="flex items-center gap-5">
						<Rate count={1} defaultValue={0} />
						<button className="p-1 text-CGray border rounded-full hover:text-CRed hover:border-CRed peer-checked/done:hidden">
							<IoMdClose />
						</button>
					</div>
				</div>
				{/* To-Do Item 5 */}
				<div className="flex justify-between items-center bg-white px-5 py-3 rounded-lg has-[:checked]:bg-CBlue has-[:checked]:text-white">
					<div className="flex items-center gap-5">
						<input type="checkbox" className="peer/done checked:ring-1 checked:ring-white" />
						<p>Going to Dia’s School</p>
					</div>
					<div className="flex items-center gap-5">
						<Rate count={1} defaultValue={0} />
						<button className="p-1 text-CGray border rounded-full hover:text-CRed hover:border-CRed peer-checked/done:hidden">
							<IoMdClose />
						</button>
					</div>
				</div>
				{/* To-Do Item 6 */}
				<div className="flex justify-between items-center bg-white px-5 py-3 rounded-lg has-[:checked]:bg-CBlue has-[:checked]:text-white">
					<div className="flex items-center gap-5">
						<input type="checkbox" className="peer/done checked:ring-1 checked:ring-white" />
						<p>Check design files</p>
					</div>
					<div className="flex items-center gap-5">
						<Rate count={1} defaultValue={1} />
						<button className="p-1 text-CGray border rounded-full hover:text-CRed hover:border-CRed peer-checked/done:hidden">
							<IoMdClose />
						</button>
					</div>
				</div>
				{/* To-Do Item 7 */}
				<div className="flex justify-between items-center bg-white px-5 py-3 rounded-lg has-[:checked]:bg-CBlue has-[:checked]:text-white">
					<div className="flex items-center gap-5">
						<input type="checkbox" className="peer/done checked:ring-1 checked:ring-white" />
						<p>Update File</p>
					</div>
					<div className="flex items-center gap-5">
						<Rate count={1} defaultValue={0} />
						<button className="p-1 text-CGray border rounded-full hover:text-CRed hover:border-CRed peer-checked/done:hidden">
							<IoMdClose />
						</button>
					</div>
				</div>
			</div>
			{/* Page Content End */}
		</div>
	);
}
