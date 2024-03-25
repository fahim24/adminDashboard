import type { Metadata } from "next";
import Sidenav from "@/modules/sidenav";
import Topnav from "@/modules/topnav";
import { MenuToggleProvider } from "@/modules/Contexts/MenuToggleContext";

export const metadata: Metadata = {
	title: "Dashboard",
	description: "Generated by create next app",
};

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<MenuToggleProvider>
			<div className=" flex bg-CBG">
				<div className="w-fit">
					<Sidenav />
				</div>
				<div className=" flex-auto">
					<Topnav />
					<main className="m-5">{children}</main>
				</div>
			</div>
		</MenuToggleProvider>
	);
}
