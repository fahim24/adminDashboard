import { Nunito_Sans as NS } from "next/font/google";
import "@/app/globals.css";

const ns = NS({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={ns.className}>{children}</body>
		</html>
	);
}
