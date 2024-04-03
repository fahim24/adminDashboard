import React from "react";
import Link from "next/link";
import UploadPhoto from "@/modules/buttons/UploadPhoto";

export default function NewEventForm() {
	return (
		<div className="bg-white w-full p-10 rounded-lg ">
			<form className="flex flex-col gap-10 w-full lg:w-[800px] mx-auto">
				<UploadPhoto />
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					<div className="flex flex-col gap-2">
						<label className="font-semibold text-CLight">Event Name</label>
						<input
							type="text"
							className="bg-CBG p-3 border text-sm rounded"
							placeholder="Enter Event Name"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="font-semibold text-CLight">Time </label>
						<input
							type="text"
							className="bg-CBG p-3 border text-sm rounded"
							placeholder="Enter Event Time"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="font-semibold text-CLight">Date</label>
						<input
							type="text"
							className="bg-CBG p-3 border text-sm rounded"
							placeholder="Enter Event Date"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="font-semibold text-CLight">Address</label>
						<input
							type="text"
							className="bg-CBG p-3 border text-sm rounded"
							placeholder="Enter Event Address"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="font-semibold text-CLight">Contact Number</label>
						<input
							type="text"
							className="bg-CBG p-3 border text-sm rounded"
							placeholder="Enter Contact Number"
						/>
					</div>
					<div></div>
				</div>
				<Link href="/calendar" className="mx-auto">
					<button className="bg-CBlue text-white font-semibold  px-10 py-3 rounded-lg">
						Add now
					</button>
				</Link>
			</form>
		</div>
	);
}
