import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="h-screen w-screen flex justify-center items-center bg-img">
			<div className="bg-white p-10 rounded-xl space-y-10 mx-5">
				<div>
					<Image src="/image/404.png" alt="404" width={390} height={298} />
				</div>
				<div>
					<p className="text-3xl font-bold text-center mb-5">Looks like you&apos;ve got lost…</p>
					<Link href="/dashboard">
						<button className="bg-CBlue text-white flex items-center justify-center rounded-xl px-4 py-2 w-full">
							Go Back Home
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
