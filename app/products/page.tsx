// Import from Next
import Image from "next/image";
// Import From antd
import { Card, Rate } from "antd";
// Imported Modules
import PSlider from "@/modules/Sliders/PSlider";
import PBSlider from "@/modules/Sliders/PBSlider";
import { RiHeartLine } from "react-icons/ri";

export default function Products() {
	return (
		// Products Page Start
		<div className="space-y-5">
			{/* Page Heading Start */}
			<p className="text-3xl text-CDark font-bold">Products</p>
			{/* Page Content Start */}
			{/* Product Banner Start */}
			<div className="grid grid-cols-1 ">
				<Card className="relative p-5">
					<Image
						className="absolute top-0 left-0 bottom-0 right-0 size-full rounded-lg"
						src="/image/bgPattern.png"
						quality={100}
						alt="patter"
						height={1141}
						width={346}
					/>
					<PBSlider />
				</Card>
			</div>
			{/* Pdoducts Card Start */}
			<div className="grid grid-cols-3 gap-5 ">
				{/* Product Card 1 Start */}
				<Card className="relative h-[500px]">
					<div className="absolute left-0 right-0 top-0">
						<PSlider />
					</div>
					<div className="flex justify-between items-start mt-[320px]">
						<div className="space-y-1">
							<p className="text-lg text-CDark font-bold">Apple Watch Series 4</p>
							<p className=" text-CBlue font-bold">$120.00</p>
							<div>
								<Rate disabled defaultValue={4} style={{ fontSize: "16px" }} /> <span>(131)</span>
							</div>
						</div>
						<button className="bg-CBG size-10 text-CDark hover:text-CRed hover:bg-CRed hover:bg-opacity-20 flex justify-center items-center rounded-full">
							<RiHeartLine />
						</button>
					</div>
					<button className="bg-CBG px-7 py-2 rounded-xl font-semibold mt-4">Edit Product</button>
				</Card>
				{/* Product Card 2 Start */}
				<Card className="relative h-[500px]">
					<div className="absolute left-0 right-0 top-0">
						<PSlider />
					</div>
					<div className="flex justify-between items-start mt-[320px]">
						<div className="space-y-1">
							<p className="text-lg text-CDark font-bold">Apple Watch Series 4</p>
							<p className=" text-CBlue font-bold">$120.00</p>
							<div>
								<Rate disabled defaultValue={4} style={{ fontSize: "16px" }} /> <span>(131)</span>
							</div>
						</div>
						<button className="bg-CBG size-10 text-CDark hover:text-CRed hover:bg-CRed hover:bg-opacity-20 flex justify-center items-center rounded-full">
							<RiHeartLine />
						</button>
					</div>
					<button className="bg-CBG px-7 py-2 rounded-xl font-semibold mt-4">Edit Product</button>
				</Card>
				{/* Product Card 3 Start */}
				<Card className="relative h-[500px]">
					<div className="absolute left-0 right-0 top-0">
						<PSlider />
					</div>
					<div className="flex justify-between items-start mt-[320px]">
						<div className="space-y-1">
							<p className="text-lg text-CDark font-bold">Apple Watch Series 4</p>
							<p className=" text-CBlue font-bold">$120.00</p>
							<div>
								<Rate disabled defaultValue={4} style={{ fontSize: "16px" }} /> <span>(131)</span>
							</div>
						</div>
						<button className="bg-CBG size-10 text-CDark hover:text-CRed hover:bg-CRed hover:bg-opacity-20 flex justify-center items-center rounded-full">
							<RiHeartLine />
						</button>
					</div>
					<button className="bg-CBG px-7 py-2 rounded-xl font-semibold mt-4">Edit Product</button>
				</Card>
			</div>
			{/* Page Content End */}
		</div>
	);
}
