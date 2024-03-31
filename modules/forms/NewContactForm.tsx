import React from "react";

export default function NewContactForm() {
	return (
		<div className="bg-white w-full p-10 rounded-lg ">
			<form className="flex flex-col gap-10 w-[800px] mx-auto">
				<p className="text-center">Upload Photo</p>
				<input type="file" />
				<div className="grid grid-cols-2 gap-10">
					<div className="flex flex-col gap-2">
						<label className="font-semibold text-CLight">First Name</label>
						<input
							type="text"
							className="bg-CBG p-3 border text-sm rounded"
							placeholder="Enter Your First Name"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="font-semibold text-CLight">Last Name</label>
						<input
							type="text"
							className="bg-CBG p-3 border text-sm rounded"
							placeholder="Enter Your Last Name"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="font-semibold text-CLight">Your Email</label>
						<input
							type="text"
							className="bg-CBG p-3 border text-sm rounded"
							placeholder="Enter Your Email"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="font-semibold text-CLight">Phone Number</label>
						<input
							type="text"
							className="bg-CBG p-3 border text-sm rounded"
							placeholder="Enter Your Phone Number"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="font-semibold text-CLight">Date of Birth</label>
						<input
							type="text"
							className="bg-CBG p-3 border text-sm rounded"
							placeholder="Enter Your Date of Birth"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="font-semibold text-CLight">Gender</label>
						<select className="bg-CBG p-3 border text-sm rounded w-1/2">
							<option value="male">Male</option>
							<option value="female">Female</option>
							<option value="other">Other</option>
						</select>
					</div>
					<div></div>
				</div>
				<button className="bg-CBlue text-white font-semibold mx-auto px-10 py-3 rounded-lg">
					Add now
				</button>
			</form>
		</div>
	);
}
