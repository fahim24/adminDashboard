// import from react
import React from "react";
// import from next
import { Metadata } from "next";
// import from antd
import { Input, Rate } from "antd";
// import from react-icons
import { CiSearch } from "react-icons/ci";
import { MdDelete, MdInfo, MdMoveToInbox } from "react-icons/md";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Link from "next/link";

// Title and Metadata for the Inbox Page
export const metadata: Metadata = {
	title: "Inbox",
};

export default function Inbox() {
	return (
		// Inbox Page Start
		<div className="space-y-5">
			{/* Content Start */}
			<div className="bg-white border rounded-lg">
				{/* Search Bar and Filter Buttons Start */}
				<div className="flex items-center justify-between p-5">
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
				<div className="divide-y mt-5">
					{/* Mail 1 */}
					<div className="p-4 flex gap-2.5 items-center has-[:checked]:bg-CBG text-sm">
						<div className="flex gap-2.5 items-center w-1/4">
							<input type="checkbox" className="checked:accent-black" />
							<Rate count={1} />
							<Link href="/dashboard/inbox/message" className="w-full">
								<p className="font-bold">Jullu Jalal</p>
							</Link>
						</div>
						<Link href="/dashboard/inbox/message" className="w-3/4">
							<div className="flex items-center justify-between gap-2.5 w-full">
								<div className="flex gap-2.5 items-center">
									<div className="w-16 h-6 flex justify-center items-center  bg-CGreen bg-opacity-20 text-CGreen rounded font-semibold text-xs">
										Primary
									</div>
									<p className="font-semibold">
										Our Bachelor of Commerce program is ACBSP-accredited.
									</p>
								</div>
								<p className="font-semibold text-CLight">8:38 AM</p>
							</div>
						</Link>
					</div>
					{/* Mail 2 */}
					<div className="p-4 flex gap-2.5 items-center has-[:checked]:bg-CBG text-sm">
						<div className="flex gap-2.5 items-center w-1/4">
							<input type="checkbox" className="checked:accent-black pointer-events-auto" />
							<Rate count={1} />
							<Link href="/dashboard/inbox/message" className="w-full">
								<p className="font-bold">Minerva Barnett</p>
							</Link>
						</div>
						<Link href="/dashboard/inbox/message" className="w-3/4">
							<div className="flex items-center justify-between gap-2.5 w-full">
								<div className="flex gap-2.5 items-center">
									<div className="w-16 h-6 flex justify-center items-center  bg-COrange bg-opacity-20 text-COrange rounded font-semibold text-xs">
										Work
									</div>
									<p className="font-semibold">Get Best Advertiser In Your Side Pocket</p>
								</div>
								<p className="font-semibold text-CLight">8:13 AM</p>
							</div>
						</Link>
					</div>
					{/* Mail 3 */}
					<div className="p-4 flex gap-2.5 items-center has-[:checked]:bg-CBG text-sm">
						<div className="flex gap-2.5 items-center w-1/4">
							<input type="checkbox" className="checked:accent-black" />
							<Rate count={1} />
							<Link href="/dashboard/inbox/message" className="w-full">
								<p className="font-bold">Peter Lewis</p>
							</Link>
						</div>
						<Link href="/dashboard/inbox/message" className="w-3/4">
							<div className="flex items-center justify-between gap-2.5 w-full">
								<div className="flex gap-2.5 items-center">
									<div className="w-16 h-6 flex justify-center items-center  bg-CPurple bg-opacity-20 text-CPurple rounded font-semibold text-xs">
										Friends
									</div>
									<p className="font-semibold">Vacation Home Rental Success</p>
								</div>
								<p className="font-semibold text-CLight">7:52 PM</p>
							</div>
						</Link>
					</div>
					{/* Mail 4 */}
					<div className="p-4 flex gap-2.5 items-center has-[:checked]:bg-CBG text-sm">
						<div className="flex gap-2.5 items-center w-1/4">
							<input type="checkbox" className="checked:accent-black" />
							<Rate count={1} defaultValue={1} />
							<Link href="/dashboard/inbox/message" className="w-full">
								<p className="font-bold">Anthony Briggs</p>
							</Link>
						</div>
						<Link href="/dashboard/inbox/message" className="w-3/4">
							<div className="flex items-center justify-between gap-2.5 w-full">
								<div className="flex gap-2.5 items-center">
									<p className="font-semibold">
										Free Classifieds Using Them To Promote Your Stuff Online
									</p>
								</div>
								<p className="font-semibold text-CLight">7:52 PM</p>
							</div>
						</Link>
					</div>
					{/* Mail 5 */}
					<div className="p-4 flex gap-2.5 items-center has-[:checked]:bg-CBG text-sm">
						<div className="flex gap-2.5 items-center w-1/4">
							<input type="checkbox" className="checked:accent-black" />
							<Rate count={1} />
							<Link href="/dashboard/inbox/message" className="w-full">
								<p className="font-bold">Clifford Morgan</p>
							</Link>
						</div>
						<Link href="/dashboard/inbox/message" className="w-3/4">
							<div className="flex items-center justify-between gap-2.5 w-full">
								<div className="flex gap-2.5 items-center">
									<div className="w-16 h-6 flex justify-center items-center  bg-CBlue bg-opacity-20 text-CBlue rounded font-semibold text-xs">
										Social
									</div>
									<p className="font-semibold">
										Enhance Your Brand Potential With Giant Advertising Blimps
									</p>
								</div>
								<p className="font-semibold text-CLight">4:13 PM</p>
							</div>
						</Link>
					</div>
					{/* Mail 6 */}
					<div className="p-4 flex gap-2.5 items-center has-[:checked]:bg-CBG text-sm">
						<div className="flex gap-2.5 items-center w-1/4">
							<input type="checkbox" className="checked:accent-black" />
							<Rate count={1} />
							<Link href="/dashboard/inbox/message" className="w-full">
								<p className="font-bold">Cecilia Webster</p>
							</Link>
						</div>
						<Link href="/dashboard/inbox/message" className="w-3/4">
							<div className="flex items-center justify-between gap-2.5 w-full">
								<div className="flex gap-2.5 items-center">
									<div className="w-16 h-6 flex justify-center items-center  bg-CPurple bg-opacity-20 text-CPurple rounded font-semibold text-xs">
										Friends
									</div>
									<p className="font-semibold">Always Look On The Bright Side Of Life</p>
								</div>
								<p className="font-semibold text-CLight">3:52 PM</p>
							</div>
						</Link>
					</div>
					{/* Mail 7 */}
					<div className="p-4 flex gap-2.5 items-center has-[:checked]:bg-CBG text-sm">
						<div className="flex gap-2.5 items-center w-1/4">
							<input type="checkbox" className="checked:accent-black" />
							<Rate count={1} defaultValue={1} />
							<Link href="/dashboard/inbox/message" className="w-full">
								<p className="font-bold">Harvey Manning</p>
							</Link>
						</div>
						<Link href="/dashboard/inbox/message" className="w-3/4">
							<div className="flex items-center justify-between gap-2.5 w-full">
								<div className="flex gap-2.5 items-center">
									<p className="font-semibold">
										Curling Irons Are As Individual As The Women Who Use Them
									</p>
								</div>
								<p className="font-semibold text-CLight">2:30 PM</p>
							</div>
						</Link>
					</div>
					{/* Mail 8 */}
					<div className="p-4 flex gap-2.5 items-center has-[:checked]:bg-CBG text-sm">
						<div className="flex gap-2.5 items-center w-1/4">
							<input type="checkbox" className="checked:accent-black" />
							<Rate count={1} />
							<Link href="/dashboard/inbox/message" className="w-full">
								<p className="font-bold">Willie Blake</p>
							</Link>
						</div>
						<Link href="/dashboard/inbox/message" className="w-3/4">
							<div className="flex items-center justify-between gap-2.5 w-full">
								<div className="flex gap-2.5 items-center">
									<div className="w-16 h-6 flex justify-center items-center  bg-CGreen bg-opacity-20 text-CGreen rounded font-semibold text-xs">
										Primary
									</div>
									<p className="font-semibold">
										Our Bachelor of Commerce program is ACBSP-accredited.
									</p>
								</div>
								<p className="font-semibold text-CLight">8:38 AM</p>
							</div>
						</Link>
					</div>
					{/* Mail 9 */}
					<div className="p-4 flex gap-2.5 items-center has-[:checked]:bg-CBG text-sm">
						<div className="flex gap-2.5 items-center w-1/4">
							<input type="checkbox" className="checked:accent-black" />
							<Rate count={1} />
							<Link href="/dashboard/inbox/message" className="w-full">
								<p className="font-bold">Minerva Barnett</p>
							</Link>
						</div>
						<Link href="/dashboard/inbox/message" className="w-3/4">
							<div className="flex items-center justify-between gap-2.5 w-full">
								<div className="flex gap-2.5 items-center">
									<div className="w-16 h-6 flex justify-center items-center  bg-COrange bg-opacity-20 text-COrange rounded font-semibold text-xs">
										Work
									</div>
									<p className="font-semibold">Get Best Advertiser In Your Side Pocket</p>
								</div>
								<p className="font-semibold text-CLight">8:13 AM</p>
							</div>
						</Link>
					</div>
					{/* Mail 10 */}
					<div className="p-4 flex gap-2.5 items-center has-[:checked]:bg-CBG text-sm">
						<div className="flex gap-2.5 items-center w-1/4">
							<input type="checkbox" className="checked:accent-black" />
							<Rate count={1} defaultValue={1} />
							<Link href="/dashboard/inbox/message" className="w-full">
								<p className="font-bold">Fanny Weaver</p>
							</Link>
						</div>
						<Link href="/dashboard/inbox/message" className="w-3/4">
							<div className="flex items-center justify-between gap-2.5 w-full">
								<div className="flex gap-2.5 items-center">
									<p className="font-semibold">
										Free Classifieds Using Them To Promote Your Stuff Online
									</p>
								</div>
								<p className="font-semibold text-CLight">7:52 PM</p>
							</div>
						</Link>
					</div>
					{/* Mail 11 */}
					<div className="p-4 flex gap-2.5 items-center has-[:checked]:bg-CBG text-sm">
						<div className="flex gap-2.5 items-center w-1/4">
							<input type="checkbox" className="checked:accent-black" />
							<Rate count={1} />
							<Link href="/dashboard/inbox/message" className="w-full">
								<p className="font-bold">Olga Hogan</p>
							</Link>
						</div>
						<Link href="/dashboard/inbox/message" className="w-3/4">
							<div className="flex items-center justify-between gap-2.5 w-full">
								<div className="flex gap-2.5 items-center">
									<div className="w-16 h-6 flex justify-center items-center  bg-CBlue bg-opacity-20 text-CBlue rounded font-semibold text-xs">
										Social
									</div>
									<p className="font-semibold">
										Enhance Your Brand Potential With Giant Advertising Blimps
									</p>
								</div>
								<p className="font-semibold text-CLight">4:13 PM</p>
							</div>
						</Link>
					</div>
					{/* Mail 12 */}
					<div className="p-4 flex gap-2.5 items-center has-[:checked]:bg-CBG text-sm">
						<div className="flex gap-2.5 items-center w-1/4">
							<input type="checkbox" className="checked:accent-black" />
							<Rate count={1} />
							<Link href="/dashboard/inbox/message" className="w-full">
								<p className="font-bold">Lora Houston</p>
							</Link>
						</div>
						<Link href="/dashboard/inbox/message" className="w-3/4">
							<div className="flex items-center justify-between gap-2.5 w-full">
								<div className="flex gap-2.5 items-center">
									<div className="w-16 h-6 flex justify-center items-center  bg-CPurple bg-opacity-20 text-CPurple rounded font-semibold text-xs">
										Friends
									</div>
									<p className="font-semibold">Vacation Home Rental Success</p>
								</div>
								<p className="font-semibold text-CLight">7:52 PM</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
			{/* Pagination Start */}
			<div className="flex items-center justify-between">
				<p className="font-semibold text-CLight">Showing 1-12 of 1,253</p>
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
