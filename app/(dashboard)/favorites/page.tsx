// Import from react
import React from "react";
// Import from next
import { Metadata } from "next";
// Import from antd
import { Card, Rate } from "antd";
// Import from react-icons
import { FaHeart } from "react-icons/fa";
// Imported modules
import FavPSlider from "@/modules/Sliders/FavPSlider";

// Title and Metadata for the Favorites Page
export const metadata: Metadata = {
	title: "Favorites",
};

export default function Favorites() {
	return (
		// favorite Page Start
		<div className="space-y-5">
			{/* Page Heading Start */}
			<p className="text-3xl text-CDark font-bold">Favorites</p>
			{/* Page Content Start */}
			{/* Favorite Product Card Start */}
			<div className="grid grid-cols-3 gap-5 ">
				{/* Product Card 1 Start */}
				<Card className="relative h-[500px]">
					<div className="absolute left-0 right-0 top-0">
						<FavPSlider />
					</div>
					<div className="flex justify-between items-start mt-[320px]">
						<div className="space-y-1">
							<p className="text-lg text-CDark font-bold">Apple Watch Series 4</p>
							<p className=" text-CBlue font-bold">$120.00</p>
							<div>
								<Rate disabled defaultValue={4} style={{ fontSize: "16px" }} /> <span>(131)</span>
							</div>
						</div>
						<button className="bg-CBG size-10 text-CRed hover:text-CDark flex justify-center items-center rounded-full">
							<FaHeart />
						</button>
					</div>
					<button className="bg-CBG px-7 py-2 rounded-xl font-semibold mt-4">Edit Product</button>
				</Card>
				{/* Product Card 2 Start */}
				<Card className="relative h-[500px]">
					<div className="absolute left-0 right-0 top-0">
						<FavPSlider />
					</div>
					<div className="flex justify-between items-start mt-[320px]">
						<div className="space-y-1">
							<p className="text-lg text-CDark font-bold">Air-Max-270</p>
							<p className=" text-CBlue font-bold">$60.00</p>
							<div>
								<Rate disabled defaultValue={4} style={{ fontSize: "16px" }} /> <span>(64)</span>
							</div>
						</div>
						<button className="bg-CBG size-10 text-CRed hover:text-CDark flex justify-center items-center rounded-full">
							<FaHeart />
						</button>
					</div>
					<button className="bg-CBG px-7 py-2 rounded-xl font-semibold mt-4">Edit Product</button>
				</Card>
				{/* Product Card 3 Start */}
				<Card className="relative h-[500px]">
					<div className="absolute left-0 right-0 top-0">
						<FavPSlider />
					</div>
					<div className="flex justify-between items-start mt-[320px]">
						<div className="space-y-1">
							<p className="text-lg text-CDark font-bold">Minimal Chair Tool</p>
							<p className=" text-CBlue font-bold">$24.59</p>
							<div>
								<Rate disabled defaultValue={5} style={{ fontSize: "16px" }} /> <span>(63)</span>
							</div>
						</div>
						<button className="bg-CBG size-10 text-CRed hover:text-CDark flex justify-center items-center rounded-full">
							<FaHeart />
						</button>
					</div>
					<button className="bg-CBG px-7 py-2 rounded-xl font-semibold mt-4">Edit Product</button>
				</Card>
				{/* Product Card 4 Start */}
				<Card className="relative h-[500px]">
					<div className="absolute left-0 right-0 top-0">
						<FavPSlider />
					</div>
					<div className="flex justify-between items-start mt-[320px]">
						<div className="space-y-1">
							<p className="text-lg text-CDark font-bold">Amazfit Vip</p>
							<p className=" text-CBlue font-bold">$78.35</p>
							<div>
								<Rate disabled defaultValue={4} style={{ fontSize: "16px" }} /> <span>(154)</span>
							</div>
						</div>
						<button className="bg-CBG size-10 text-CRed hover:text-CDark flex justify-center items-center rounded-full">
							<FaHeart />
						</button>
					</div>
					<button className="bg-CBG px-7 py-2 rounded-xl font-semibold mt-4">Edit Product</button>
				</Card>
				{/* Product Card 5 Start */}
				<Card className="relative h-[500px]">
					<div className="absolute left-0 right-0 top-0">
						<FavPSlider />
					</div>
					<div className="flex justify-between items-start mt-[320px]">
						<div className="space-y-1">
							<p className="text-lg text-CDark font-bold">Gumbo Mouse</p>
							<p className=" text-CBlue font-bold">$32.42</p>
							<div>
								<Rate disabled defaultValue={4} style={{ fontSize: "16px" }} /> <span>(35)</span>
							</div>
						</div>
						<button className="bg-CBG size-10 text-CRed hover:text-CDark flex justify-center items-center rounded-full">
							<FaHeart />
						</button>
					</div>
					<button className="bg-CBG px-7 py-2 rounded-xl font-semibold mt-4">Edit Product</button>
				</Card>
				{/* Product Card 5 Start */}
				<Card className="relative h-[500px]">
					<div className="absolute left-0 right-0 top-0">
						<FavPSlider />
					</div>
					<div className="flex justify-between items-start mt-[320px]">
						<div className="space-y-1">
							<p className="text-lg text-CDark font-bold">Camera Tripod</p>
							<p className=" text-CBlue font-bold">$50.00</p>
							<div>
								<Rate disabled defaultValue={4} style={{ fontSize: "16px" }} /> <span>(535)</span>
							</div>
						</div>
						<button className="bg-CBG size-10 text-CRed hover:text-CDark flex justify-center items-center rounded-full">
							<FaHeart />
						</button>
					</div>
					<button className="bg-CBG px-7 py-2 rounded-xl font-semibold mt-4">Edit Product</button>
				</Card>
			</div>
			{/* Page Content End */}
		</div>
	);
}
