import Sidenav from "@/modules/sidenav";
import Topnav from "@/modules/topnav";
import { MenuToggleProvider } from "@/modules/Contexts/MenuToggleContext";

export default function PagesLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<MenuToggleProvider>
			<div className=" flex bg-CBG">
				<div className="w-fit hidden md:block">
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
