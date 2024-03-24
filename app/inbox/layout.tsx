import InboxMenu from "@/modules/inboxMenu";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="space-y-5">
			{/* Page Heading Start*/}
			<h1 className="text-3xl text-CDark font-bold">Inbox</h1>
			<div className="flex gap-5">
				<div>
					<InboxMenu />
				</div>
				<div>{children}</div>
			</div>
		</div>
	);
}
