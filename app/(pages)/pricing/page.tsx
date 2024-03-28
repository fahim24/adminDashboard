// Import from react
import React from "react";
// Import from next
import { Metadata } from "next";
import { Card, Divider } from "antd";

// Title and Metadata for the Pricing Page
export const metadata: Metadata = {
	title: "Pricing",
};

export default function PricingPage() {
	return (
		// Pricing Page Start
		<div className="space-y-5 mb-10">
			{/* Page Heading Start */}
			<p className="text-3xl text-CDark font-bold">Pricing</p>
			{/* Page Content Start */}
			<div className="grid grid-cols-3 gap-5">
				<Card className="text-center cardBG">
					{/* <div className="cardBG absolute top-0 left-0 right-0 bottom-0 "></div> */}
					<div className="space-y-2">
						<p className="text-xl font-bold">Basic</p>
						<p className="text-CGray ">Monthly Charge</p>
						<p className="text-CBlue text-5xl font-bold">$14.99</p>
					</div>
					<Divider />
					<div className="space-y-2.5">
						<p className="text-lg font-semibold">Free Setup</p>
						<p className="text-lg font-semibold">Bandwidth Limit 10 GB</p>
						<p className="text-lg font-semibold">20 User Connection</p>
						<p className="text-lg font-semibold text-CGray">Analytics Report</p>
						<p className="text-lg font-semibold text-CGray">Public API Access</p>
						<p className="text-lg font-semibold text-CGray">Plugins Intregation</p>
						<p className="text-lg font-semibold text-CGray">Custom Content Management</p>
					</div>
					<Divider />
					<div className="space-y-5">
						<button className="w-40 h-12 flex items-center justify-center rounded-full border border-CBlue text-CBlue hover:bg-CBlue hover:text-white  font-semibold mx-auto">
							Get Started
						</button>
						<button className="mx-auto font-semibold hover:underline">
							Start Your 30 Day Free Trial
						</button>
					</div>
				</Card>
				<Card className="text-center cardBG">
					{/* <div className="cardBG absolute top-0 left-0 right-0 bottom-0 "></div> */}
					<div className="space-y-2">
						<p className="text-xl font-bold">Standard</p>
						<p className="text-CGray ">Monthly Charge</p>
						<p className="text-CBlue text-5xl font-bold">$49.99</p>
					</div>
					<Divider />
					<div className="space-y-2.5">
						<p className="text-lg font-semibold">Free Setup</p>
						<p className="text-lg font-semibold">Bandwidth Limit 10 GB</p>
						<p className="text-lg font-semibold">20 User Connection</p>
						<p className="text-lg font-semibold">Analytics Report</p>
						<p className="text-lg font-semibold">Public API Access</p>
						<p className="text-lg font-semibold text-CGray">Plugins Intregation</p>
						<p className="text-lg font-semibold text-CGray">Custom Content Management</p>
					</div>
					<Divider />
					<div className="space-y-5">
						<button className="w-40 h-12 flex items-center justify-center rounded-full border border-CBlue text-CBlue hover:bg-CBlue hover:text-white  font-semibold mx-auto">
							Get Started
						</button>
						<button className="mx-auto font-semibold hover:underline">
							Start Your 30 Day Free Trial
						</button>
					</div>
				</Card>
				<Card className="text-center cardBG">
					{/* <div className="cardBG absolute top-0 left-0 right-0 bottom-0 "></div> */}
					<div className="space-y-2">
						<p className="text-xl font-bold">Premium</p>
						<p className="text-CGray ">Monthly Charge</p>
						<p className="text-CBlue text-5xl font-bold">$89.99</p>
					</div>
					<Divider />
					<div className="space-y-2.5">
						<p className="text-lg font-semibold">Free Setup</p>
						<p className="text-lg font-semibold">Bandwidth Limit 10 GB</p>
						<p className="text-lg font-semibold">20 User Connection</p>
						<p className="text-lg font-semibold">Analytics Report</p>
						<p className="text-lg font-semibold">Public API Access</p>
						<p className="text-lg font-semibold">Plugins Intregation</p>
						<p className="text-lg font-semibold">Custom Content Management</p>
					</div>
					<Divider />
					<div className="space-y-5">
						<button className="w-40 h-12 flex items-center justify-center rounded-full border border-CBlue text-CBlue hover:bg-CBlue hover:text-white  font-semibold mx-auto">
							Get Started
						</button>
						<button className="mx-auto font-semibold hover:underline">
							Start Your 30 Day Free Trial
						</button>
					</div>
				</Card>
			</div>

			{/* Page Content End */}
		</div>
	);
}
