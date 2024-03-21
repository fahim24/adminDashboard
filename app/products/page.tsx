import MySlider from "@/modules/MySlider";
import MySlider2 from "@/modules/MySlider2";
import { Card } from "antd";
import React from "react";
import Image from "next/image";
import MySlider3 from "@/modules/MySlider3";

export default function Products() {
	return (
		<div className="space-y-5">
			<p className="text-3xl text-CDark font-bold">Products</p>
			<div className="grid grid-cols-1 ">
				<Card className="relative p-5">
					<Image
						className="absolute top-0 left-0 bottom-0 right-0 size-full rounded-lg"
						// className="size-full"
						src="/image/bgPattern.png"
						quality={100}
						alt="patter"
						height={1141}
						width={346}
					/>
					<MySlider2 />
				</Card>
			</div>

			<div className="grid grid-cols-3 gap-5 ">
				<Card className="relative h-[500px]">
					<div className="absolute left-0 right-0 top-0">
						<MySlider3 />
					</div>
					<p className="text-xl text-CDark font-bold mt-[320px]">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, velit.
					</p>
					<p>Lorem ipsum dolor sit amet.</p>
				</Card>
			</div>
		</div>
	);
}
