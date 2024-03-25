import { Nunito_Sans as NS } from "next/font/google";
import "@/app/globals.css";
import { LoginProvider } from "@/modules/Contexts/LoginContext";

const ns = NS({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={ns.className}>
				<LoginProvider>{children}</LoginProvider>
			</body>
		</html>
	);
}
