import React from "react";
import UploadPhoto from "@/modules/buttons/UploadPhoto";
import Link from "next/link";

export default function SettingsForm() {
	return (
		<div className="bg-white w-full p-10 rounded-lg ">
			<form className="flex flex-col gap-10 w-full lg:w-[800px] mx-auto">
				<UploadPhoto />
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					<div className="flex flex-col gap-2">
						<label className="font-semibold text-CLight">Site Name</label>
						<input
							type="text"
							className="bg-CBG p-3 border text-sm rounded"
							placeholder="Enter New Site Name"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="font-semibold text-CLight">Copy Right</label>
						<input
							type="text"
							className="bg-CBG p-3 border text-sm rounded"
							placeholder="Enter New Copy Right"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="font-semibold text-CLight">SEO Title</label>
						<input
							type="text"
							className="bg-CBG p-3 border text-sm rounded"
							placeholder="Enter New SEO Title"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="font-semibold text-CLight">SEO Description</label>
						<input
							type="text"
							className="bg-CBG p-3 border text-sm rounded"
							placeholder="Enter New SEO Description"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="font-semibold text-CLight">SEO Keyword</label>
						<input
							type="text"
							className="bg-CBG p-3 border text-sm rounded"
							placeholder="Enter SEO Keywords"
						/>
					</div>
				</div>
				<Link href="/dashboard" className="mx-auto">
					<button className="bg-CBlue text-white font-semibold  px-10 py-3 rounded-lg ">
						Save
					</button>
				</Link>
			</form>
		</div>
	);
}
