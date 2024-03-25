// import from react
import React from "react";
// import from next
import { Metadata } from "next";
// import from antd
import { Card, Input, Rate } from "antd";
// import from react-icons
import { CiSearch } from "react-icons/ci";
import { MdDelete, MdInfo, MdMoveToInbox } from "react-icons/md";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// Title and Metadata for the Inbox Page
export const metadata: Metadata = {
	title: "Starred | Inbox",
};

export default function InboxStarred() {
	return (
		// Starred Inbox Page Start
		<div className="space-y-5">
			{/* Content Start */}
			<Card>
				{/* Search Bar and Filter Buttons Start */}
				<div className="flex items-center justify-between">
					<Input
						placeholder="Search mail"
						className="bg-CBG rounded-full w-80"
						prefix={<CiSearch />}
					/>
					<div className="bg-CBG rounded-lg divide-x border">
						<button className="p-2 hover:bg-CLight hover:bg-opacity-20">
							<MdMoveToInbox />
						</button>
						<button className="p-2 hover:bg-CLight hover:bg-opacity-20">
							<MdInfo />
						</button>
						<button className="p-2 hover:bg-CLight hover:bg-opacity-20">
							<MdDelete />
						</button>
					</div>
				</div>
				{/* Mails Start */}
				<div className="divide-y mt-10">
					{/* Mail 1 */}
					<div className="py-4 flex gap-2.5 items-center">
						<div className="flex gap-2.5 items-center w-1/4">
							<input type="checkbox" />
							<Rate count={1} defaultValue={1} />
							<p className="font-bold">Jullu Jalal</p>
						</div>
						<div className="flex items-center justify-between gap-2.5 w-3/4">
							<div className="flex gap-2.5 items-center">
								<p className="font-semibold">
									Our Bachelor of Commerce program is ACBSP-accredited.
								</p>
							</div>
							<p className="font-semibold text-CLight">8:38 AM</p>
						</div>
					</div>
					{/* Mail 2 */}
					<div className="py-4 flex gap-2.5 items-center">
						<div className="flex gap-2.5 items-center w-1/4">
							<input type="checkbox" />
							<Rate count={1} defaultValue={1} />
							<p className="font-bold">Minerva Barnett</p>
						</div>
						<div className="flex items-center justify-between gap-2.5 w-3/4">
							<div className="flex gap-2.5 items-center">
								<p className="font-semibold">Get Best Advertiser In Your Side Pocket</p>
							</div>
							<p className="font-semibold text-CLight">8:13 AM</p>
						</div>
					</div>
					{/* Mail 3 */}
					<div className="py-4 flex gap-2.5 items-center">
						<div className="flex gap-2.5 items-center w-1/4">
							<input type="checkbox" />
							<Rate count={1} defaultValue={1} />
							<p className="font-bold">Peter Lewis</p>
						</div>
						<div className="flex items-center justify-between gap-2.5 w-3/4">
							<div className="flex gap-2.5 items-center">
								<p className="font-semibold">Vacation Home Rental Success</p>
							</div>
							<p className="font-semibold text-CLight">7:52 PM</p>
						</div>
					</div>
					{/* Mail 4 */}
					<div className="py-4 flex gap-2.5 items-center">
						<div className="flex gap-2.5 items-center w-1/4">
							<input type="checkbox" />
							<Rate count={1} defaultValue={1} />
							<p className="font-bold">Anthony Briggs</p>
						</div>
						<div className="flex items-center justify-between gap-2.5 w-3/4">
							<div className="flex gap-2.5 items-center">
								<p className="font-semibold">
									Free Classifieds Using Them To Promote Your Stuff Online
								</p>
							</div>
							<p className="font-semibold text-CLight">7:52 PM</p>
						</div>
					</div>
					{/* Mail 5 */}
					<div className="py-4 flex gap-2.5 items-center">
						<div className="flex gap-2.5 items-center w-1/4">
							<input type="checkbox" />
							<Rate count={1} defaultValue={1} />
							<p className="font-bold">Clifford Morgan</p>
						</div>
						<div className="flex items-center justify-between gap-2.5 w-3/4">
							<div className="flex gap-2.5 items-center">
								<p className="font-semibold">
									Enhance Your Brand Potential With Giant Advertising Blimps
								</p>
							</div>
							<p className="font-semibold text-CLight">4:13 PM</p>
						</div>
					</div>
					{/* Mail 6 */}
					<div className="py-4 flex gap-2.5 items-center">
						<div className="flex gap-2.5 items-center w-1/4">
							<input type="checkbox" />
							<Rate count={1} defaultValue={1} />
							<p className="font-bold">Cecilia Webster</p>
						</div>
						<div className="flex items-center justify-between gap-2.5 w-3/4">
							<div className="flex gap-2.5 items-center">
								<p className="font-semibold">Always Look On The Bright Side Of Life</p>
							</div>
							<p className="font-semibold text-CLight">3:52 PM</p>
						</div>
					</div>
					{/* Mail 7 */}
					<div className="py-4 flex gap-2.5 items-center">
						<div className="flex gap-2.5 items-center w-1/4">
							<input type="checkbox" />
							<Rate count={1} defaultValue={1} />
							<p className="font-bold">Harvey Manning</p>
						</div>
						<div className="flex items-center justify-between gap-2.5 w-3/4">
							<div className="flex gap-2.5 items-center">
								<p className="font-semibold">
									Curling Irons Are As Individual As The Women Who Use Them
								</p>
							</div>
							<p className="font-semibold text-CLight">2:30 PM</p>
						</div>
					</div>
					{/* Mail 8 */}
					<div className="py-4 flex gap-2.5 items-center">
						<div className="flex gap-2.5 items-center w-1/4">
							<input type="checkbox" />
							<Rate count={1} defaultValue={1} />
							<p className="font-bold">Willie Blake</p>
						</div>
						<div className="flex items-center justify-between gap-2.5 w-3/4">
							<div className="flex gap-2.5 items-center">
								<p className="font-semibold">
									Our Bachelor of Commerce program is ACBSP-accredited.
								</p>
							</div>
							<p className="font-semibold text-CLight">8:38 AM</p>
						</div>
					</div>
					{/* Mail 9 */}
					<div className="py-4 flex gap-2.5 items-center">
						<div className="flex gap-2.5 items-center w-1/4">
							<input type="checkbox" />
							<Rate count={1} defaultValue={1} />
							<p className="font-bold">Minerva Barnett</p>
						</div>
						<div className="flex items-center justify-between gap-2.5 w-3/4">
							<div className="flex gap-2.5 items-center">
								<p className="font-semibold">Get Best Advertiser In Your Side Pocket</p>
							</div>
							<p className="font-semibold text-CLight">8:13 AM</p>
						</div>
					</div>
					{/* Mail 10 */}
					<div className="py-4 flex gap-2.5 items-center">
						<div className="flex gap-2.5 items-center w-1/4">
							<input type="checkbox" />
							<Rate count={1} defaultValue={1} />
							<p className="font-bold">Fanny Weaver</p>
						</div>
						<div className="flex items-center justify-between gap-2.5 w-3/4">
							<div className="flex gap-2.5 items-center">
								<p className="font-semibold">
									Free Classifieds Using Them To Promote Your Stuff Online
								</p>
							</div>
							<p className="font-semibold text-CLight">7:52 PM</p>
						</div>
					</div>
					{/* Mail 11 */}
					<div className="py-4 flex gap-2.5 items-center">
						<div className="flex gap-2.5 items-center w-1/4">
							<input type="checkbox" />
							<Rate count={1} defaultValue={1} />
							<p className="font-bold">Olga Hogan</p>
						</div>
						<div className="flex items-center justify-between gap-2.5 w-3/4">
							<div className="flex gap-2.5 items-center">
								<p className="font-semibold">
									Enhance Your Brand Potential With Giant Advertising Blimps
								</p>
							</div>
							<p className="font-semibold text-CLight">4:13 PM</p>
						</div>
					</div>
					{/* Mail 12 */}
					<div className="py-4 flex gap-2.5 items-center">
						<div className="flex gap-2.5 items-center w-1/4">
							<input type="checkbox" />
							<Rate count={1} defaultValue={1} />
							<p className="font-bold">Lora Houston</p>
						</div>
						<div className="flex items-center justify-between gap-2.5 w-3/4">
							<div className="flex gap-2.5 items-center">
								<p className="font-semibold">Vacation Home Rental Success</p>
							</div>
							<p className="font-semibold text-CLight">7:52 PM</p>
						</div>
					</div>
				</div>
			</Card>
			{/* Pagination Start */}
			<div className="flex items-center justify-between">
				<p className="font-semibold text-CLight">Showing 1-12 of 245</p>
				<div className="bg-white rounded-lg divide-x border">
					<button className="py-3 px-5 hover:bg-CLight hover:bg-opacity-20">
						<FaAngleLeft />
					</button>
					<button className="py-3 px-5 hover:bg-CLight hover:bg-opacity-20">
						<FaAngleRight />
					</button>
				</div>
			</div>
		</div>
	);
}
