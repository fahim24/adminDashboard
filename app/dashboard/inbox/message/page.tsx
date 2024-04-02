import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import {
	FaAngleLeft,
	FaEllipsisV,
	FaFileImage,
	FaMicrophone,
	FaPaperclip,
	FaPaperPlane,
} from "react-icons/fa";
import { MdDelete, MdInfo, MdMoveToInbox } from "react-icons/md";

// Title and Metadata for the Inbox Page
export const metadata: Metadata = {
	title: "Message",
};

export default function Message() {
	return (
		<div className="bg-white border rounded-lg mb-10">
			{/* Message Header Start */}
			<div className="flex flex-col md:flex-row gap-5  items-center justify-between px-5 py-2.5 border-b">
				<div className="flex items-center gap-2.5 order-2 md:order-1">
					<Link href="/dashboard/inbox">
						<button className="size-6 flex items-center justify-center bg-CBG hover:bg-CLight hover:bg-opacity-20 rounded">
							<FaAngleLeft />
						</button>
					</Link>
					<p className="text-xl font-bold">Minerva Barnett</p>
					<div className="w-16 h-6 flex justify-center items-center  bg-CPurple bg-opacity-20 text-CPurple rounded font-semibold text-xs">
						Friends
					</div>
				</div>
				<div className="bg-CBG rounded-lg divide-x border self-end order-1 md:order-2">
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
			{/* Message Content Start */}
			<div className="px-5 py-10 space-y-10">
				{/* Message 1 */}
				<div className="flex items-end gap-5 w-full md:w-4/5 text-sm">
					<div className="size-10 bg-CGray rounded-full shrink-0"></div>
					<div className="bg-CBG p-5 rounded-xl rounded-bl-none">
						<p>
							It is a long established fact that a reader will be distracted by the readable content
							of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
							more-or-less normal distribution of letters.
						</p>
						<div className="flex items-center gap-2.5 text-CGray justify-end mt-5">
							6:30 pm <FaEllipsisV className="cursor-pointer" />
						</div>
					</div>
				</div>
				{/* Message 2 */}
				<div className="w-full md:w-4/5 ml-auto bg-CBlue text-white p-5 rounded-xl rounded-br-none text-sm">
					<p>
						There are many variations of passages of Lorem Ipsum available, but the majority have
						suffered alteration in some form, by injected humour,
					</p>
					<div className="flex items-center gap-2.5 text-white justify-end mt-5">
						6:34 pm <FaEllipsisV className="cursor-pointer" />
					</div>
				</div>
				{/* Message 3 */}
				<div className="flex items-end gap-5 w-full md:w-4/5 text-sm">
					<div className="size-10 bg-CGray rounded-full shrink-0"></div>
					<div className="bg-CBG p-5 rounded-xl rounded-bl-none">
						<p>
							The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
							letters, as opposed to using <q>Content here, content here</q>, making it look like
							readable English. Many desktop publishing packages and web page editors now use Lorem
							Ipsum as their default.Contrary to popular belief, Lorem Ipsum is not simply random
							text is the model text for your company.
						</p>
						<div className="flex items-center gap-2.5 text-CGray justify-end mt-5">
							6:38 pm <FaEllipsisV className="cursor-pointer" />
						</div>
					</div>
				</div>
			</div>
			{/* Message Footer Start */}
			<div className="flex items-center px-5 py-2.5 border-t gap-5 text-CGray cursor-pointer">
				<FaMicrophone />
				<input type="text" placeholder="Write message..." className="w-full p-2.5 text-CDark" />
				<FaPaperclip />
				<FaFileImage />
				<button className="bg-CBlue rounded-lg text-white flex items-center justify-center  gap-2  w-8 md:w-24 h-6 md:h-9 shrink-0">
					<span className="hidden md:inline">Send</span>
					<FaPaperPlane className="text-xs md:text-sm" />
				</button>
			</div>
		</div>
	);
}
