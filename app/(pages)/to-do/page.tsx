// Import from react
import React from "react";
// Import from next
import { Metadata } from "next";
// Import from components
import ToDo from "@/modules/components/ToDo";

// Title and Metadata for the To-Do Page
export const metadata: Metadata = {
	title: "To-Do List",
};

export default function ToDoPage() {
	// To-Do items data
	const toDos = [
		{
			key: "to-do1",
			description: "Meeting with CEO",
			rate: 0,
		},
		{
			key: "to-do2",
			description: "Pick up kids from school",
			rate: 1,
		},
		{
			key: "to-do3",
			description: "Shopping with Brother",
			rate: 0,
		},
		{
			key: "to-do4",
			description: "Review with HR",
			rate: 0,
		},
		{
			key: "to-do5",
			description: "Going to Dia’s School",
			rate: 0,
		},
		{
			key: "to-do6",
			description: "Check design files",
			rate: 1,
		},
		{
			key: "to-do7",
			description: "Update File",
			rate: 0,
		},
	];

	return (
		// To-Do Page Start
		<div className="space-y-5 mb-10">
			{/* Page Heading Start */}
			<div className="flex justify-between items-center mb-10">
				<p className="text-3xl text-CDark font-bold">To-Do List</p>
				<button className="bg-CBlue text-white px-5 py-2.5 rounded text-sm">Add New Task</button>
			</div>
			{/* Page Content Start */}
			<div className="space-y-5 mb-10">
				{/* To-Do items Start */}
				{toDos.map((toDo) => (
					<ToDo key={toDo.key} description={toDo.description} rate={toDo.rate} />
				))}
			</div>
			{/* Page Content End */}
		</div>
	);
}
